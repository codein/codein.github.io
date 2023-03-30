---
title: "Setup Cloudflare Tunnels to your home server"
draft: false
date: Thu, 30 Mar 2023 14:09:10 +0000
draft: false
tags: [cloudflare, tunnel, server]
pubtype: "Blog"
featured: true
description: "A quick start guide to setup Cloudflare Tunnels to your home server"
image: "/img/cloudflare_tunnel/cloudflare_tunnel.svg"
fact: "adirondacks"
weight: 11
sitemap:
  priority : 0.8
  weight: 300
---

# Setup Cloudflare Tunnels to your home serve
Everything you need to know to get securely connect to your locally hosted application over the internet in under 30 mins.

![](/img/cloudflare_tunnel/cloudflare_tunnel.svg)


At the high level, I'm running a SimpleHTTPServer locally, that i want to access over the internet from https://home.mydomainname.com

Secondly, I'll lock down the access to this URL to whitelisted email addresses.

- [Setup Cloudflare Tunnels to your home serve](#setup-cloudflare-tunnels-to-your-home-serve)
  - [Prerequisites](#prerequisites)
  - [Local](#local)
  - [Setup `cloudflared`](#setup-cloudflared)
    - [Download](#download)
    - [install](#install)
    - [Authenticate](#authenticate)
  - [Setup tunnel](#setup-tunnel)
    - [create credential file](#create-credential-file)
    - [create config.yml](#create-configyml)
    - [Add DNS to route traffic to tunnel](#add-dns-to-route-traffic-to-tunnel)
    - [run the tunnel](#run-the-tunnel)
    - [verify](#verify)
  - [Secure you application](#secure-you-application)
    - [Create Access Group](#create-access-group)
    - [Create Access Policy](#create-access-policy)
    - [Verify](#verify-1)
    - [Security Monitoring](#security-monitoring)
  - [Additional Resources](#additional-resources)



## Prerequisites
Before you start, make sure you:

+ [Add a website to Cloudflare](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/).
+ [Change your domain nameservers to Cloudflare](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/)

## Local

- in this POC i'm running a SimpleHTTPServer to surface the Director listing of a folder
- python2 -m SimpleHTTPServer 65000


## Setup `cloudflared`

### Download

`wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb`

### install
`dpkg -i cloudflared-linux-amd64.deb`

### Authenticate
```
cloudflared tunnel login
```

## Setup tunnel

### create credential file
`cloudflared tunnel create <NAME>`
this will spit out a `<UUID>.json` file in your `~/.clouflared` DIR

### create config.yml
```
tunnel: <Tunnel-UUID>
credentials-file: /root/.cloudflared/<Tunnel-UUID>.json

ingress:
  - hostname: home.mydomainname.com
    service: http://localhost:65000
  - service: http_status:400
```

### Add DNS to route traffic to tunnel
- cloudflared tunnel route dns 856e737a-1b47-4037-9e3c-1f1c7a18eeab robinvarghese.com
- cloudflared tunnel run <NAME>

### run the tunnel
`cloudflared tunnel run <UUID or NAME>`

### verify
visiting the URL now should route traffic to your local service

Note:

## Secure you application
[Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/) determines who can reach your application by applying the Access policies you configure.

Cloudflare Zero Trust integrates with your organization’s identity provider to apply Zero Trust and Secure Web Gateway policies.

In this example, I'm using As an alternative to configuring an identity provider, Cloudflare Zero Trust can send a [one-time PIN (OTP)](https://developers.cloudflare.com/cloudflare-one/identity/one-time-pin/) to approved email addresses.

### Create [Access Group](https://developers.cloudflare.com/cloudflare-one/identity/users/groups/)
A group is a set of rules that can be configured once and then quickly applied across many Access applications

![](/img/cloudflare_tunnel/cloudflare_access_group_configuration.png)
### Create [Access Policy](https://developers.cloudflare.com/cloudflare-one/policies/access/policy-management/)
An Access policy consists of an Action as well as rules which determine the scope of the action.

![](/img/cloudflare_tunnel/cloudflare_access_policy.png)
### Verify
visiting the URL now should present you with a [login page](https://developers.cloudflare.com/cloudflare-one/identity/login-page/)

![](/img/cloudflare_tunnel/cloudflare_Access_auth.png)

### Security Monitoring

You can monitor traffic in **Analytics & Logs** from the [Cloudflare dashboard](https://dash.cloudflare.com/login).


## Additional Resources
- Official Cloudflare Documentation Follow this step-by-step [guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/local/) to get your first tunnel up and running using the CLI.

- [Set Up a Cloudflare Tunnel to Expose Local Servers to the Internet](https://www.makeuseof.com/use-cloudflare-tunnel-expose-local-servers-internet/)

