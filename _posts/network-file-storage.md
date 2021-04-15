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

For my file server, I'm using a simple Raspberry Pi 4 device running Raspbian OS. On this device, I have both Samba and NFS servers configured and running. For Raspbian, this means installing nfs-kernel-server and samba from the official package repository. Both are configured as simply as possible, with NFS not using LDAP or any authentication method and Samba using the default PAM based authentication.

## A note about NFS and Windows Explorer

NTFS has a nifty feature called Alternate Data Streams which allows additional files to be stored alongside the main file data. These additional files provide metadata about the file. My NFS share does not use the NTFS filesystem, but still I see Zone.Identifier metadata files being created if I copy a folder or file using Windows Explorer to my NFS share. This is possibly related to https://github.com/microsoft/WSL/issues/4609 since I do have WSL installed, however the drive is mapped using the usual map network drive option in Windows Explorer, so no tying it to WSL on my part.

For now, I am simply avoiding copying any files using Windows Explorer to the drive.

## Benchmarks

With a shared workspace directory being served via both NFS and Samba from the same device, we are ready to benchmark the two for use as a Visual Studio Code, IntelliJ IDEA, or other project/workspace directory location.