---
title: "Single-threaded vs Multi-threading vs Multi-processing in Python"
draft: false
date: Tue, 15 Dec 2020 14:09:10 +0000
draft: false
tags: [GIL, multiprocessing, threading, simulation]
pubtype: "Talk"
featured: true
description: "Single-threaded vs Multi-threading vs Multi-processing in Python"
image: "/img/why-multi-process-2.png"
fact: ""
weight: 11
sitemap:
  priority : 0.8
  weight: 300
---

# Single-threaded vs Multi-threading vs Multi-processing in Python
* [jupyter notebook link](/jupyter_notebooks/why-multi-process.html)



We will try to run a few simulated processes to understand the performance difference between Single-threaded, Multi-threading and Multi-processing in Python.

We will learn about GIL - Alternative Python interpreters - by counting to 255 million and downloading few webpages

```py
import concurrent.futures
import requests
import threading
import time
import math
import random
from multiprocessing import Pool

# Reference and Credits
# https://realpython.com/python-concurrency

thread_local = threading.local()

def get_session():
    if not hasattr(thread_local, "session"):
        thread_local.session = requests.Session()
    return thread_local.session


def download_site(url):
    """Function to simulate a high IO operation"""
    start_time = time.time()
    session = get_session()
    log = None
    with session.get(url) as response:
        log = f"Read {len(response.content)} from {url}"
    duration = time.time() - start_time
    return {
        'work_start_time': start_time,
        'work_duration': duration,
        'work_output': log,
        'work_type': 'IO',

    }

def countdown(n):
    """Function to simulate a CPU-bound operation"""
    start_time = time.time()
    while n>0:
        n -= 1
    duration = time.time() - start_time
    return {
        'work_start_time': start_time,
        'work_duration': duration,
        'work_output': n,
        'work_type': 'CPU',
    }


def download_all_sites_threaded(sites):
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        return executor.map(download_site, sites)

def process_work(args):
    (work_func, work_item) = args
    return work_func(work_item)

def process_with_thread_pool_executor(work_load, max_workers=5):
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        result_list = list(executor.map(process_work, work_load))
    return result_list


def process_with_multiprocessing_pool(work_load, max_workers=5):
    with Pool(max_workers) as executor:
        result_list = list(executor.map(process_work, work_load))
    return result_list

def get_runtime(work_load, multithreading=False, multiprocessing=False, max_workers=1):
    start_time = time.time()
    if multithreading:
        results = process_with_thread_pool_executor(work_load, max_workers=max_workers)
    if multiprocessing:
        results = process_with_multiprocessing_pool(work_load, max_workers=max_workers)
    duration = time.time() - start_time
    return {
        'work_load_size': len(work_load),
        'process_start_time': start_time,
        'process_duration': duration,
        'results': results
    }

def get_cpu_work_load(load_size=1):
    return [(countdown, 850000) for n in range(load_size)]

def get_io_work_load(load_size=1):
    """
    A work is defined as tuple with the function and arg pair.
    This function returns a work_load of requested load_size
    """
    seed_sites = [
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ]

    arg_sites = seed_sites * math.ceil(load_size/2)
    arg_sites = arg_sites[0:load_size]
    work_load = [(download_site, site) for site in arg_sites]
    return work_load

def run_simulated_work_load():
    runtimes = []
    load_size = 300
    print('Load Size:{0}'.format(load_size))
    io_work_load = get_io_work_load(load_size=load_size)
    cpu_work_load = get_cpu_work_load(load_size=load_size)
    io_and_cpu_work_load = io_work_load+cpu_work_load
    random.shuffle(io_and_cpu_work_load)

    work_load_label = 'io_work_load single thread'
    runtime = get_runtime(io_work_load, multithreading=True, multiprocessing=False, max_workers=1)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'io_work_load 5 threads'
    runtime = get_runtime(io_work_load, multithreading=True, multiprocessing=False, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'io_work_load 5 process'
    runtime = get_runtime(io_work_load, multithreading=False, multiprocessing=True, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'cpu_work_load single thread'
    runtime = get_runtime(cpu_work_load, multithreading=True, multiprocessing=False, max_workers=1)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'cpu_work_load 5 threads'
    runtime = get_runtime(cpu_work_load, multithreading=True, multiprocessing=False, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'cpu_work_load 5 process'
    runtime = get_runtime(cpu_work_load, multithreading=False, multiprocessing=True, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'io_and_cpu_work_load single thread'
    runtime = get_runtime(io_and_cpu_work_load, multithreading=True, multiprocessing=False, max_workers=1)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)


    work_load_label = 'io_and_cpu_work_load 5 threads'
    runtime = get_runtime(io_and_cpu_work_load, multithreading=True, multiprocessing=False, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    work_load_label = 'io_and_cpu_work_load 5 process'
    runtime = get_runtime(io_and_cpu_work_load, multithreading=False, multiprocessing=True, max_workers=5)
    runtime['work_load_label'] = work_load_label
    print(work_load_label)
    runtimes.append(runtime)

    return runtimes

```



<div style="position: relative; padding-bottom: 360%; height: 0; overflow: hidden;">
  <iframe src="/jupyter_notebooks/why-multi-process.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen title="Level up on Functional Programming by Rebuilding LINQ with Cameron Presley"></iframe>
</div>

