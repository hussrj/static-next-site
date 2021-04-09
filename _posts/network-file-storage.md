---
title: 'Comparing Samba and NFS for hosting a workspace directory'
excerpt: 'Although our version control repository may be hosted on a service such as GitHub or GitLab, it can help to have our entire workspace directory hosted on Samba or NFS. This allows us to mount the directory to a drive in our Windows workstations and mount it to a path in those running Linux.'
coverImage: '/assets/data-storage.jpg'
date: '2020-04-07T05:09:00.000Z'
author:
  name: Rob Hussey
  picture: '/assets/blog/authors/light-huss.jpg'
ogImage:
  url: '/ogrjhuss.png'
---

## Two from one

For my file server, I'm using a simple Raspberry Pi 4 device running Raspbian OS. From the official package repository, I have installed nfs-kernel-server and samba. Both are configured as simply as possible, with NFS not using LDAP or any authentication method and Samba using the default PAM based authentication. 

## Benchmarks

With a shared workspace directory being served via both NFS and Samba from the same device, we are ready to benchmark the two for use as a Visual Studio Code, IntelliJ IDEA, or other project/workspace directory location.