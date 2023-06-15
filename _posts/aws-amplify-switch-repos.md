---
title: 'How to change the repository or service provider for AWS Amplify'
excerpt: 'AWS Amplify automates the build and deploy of the web app but it can be tricky to switch over to a different repository or provider when needed.'
coverImage: '/assets/cloud-blue-sky.jpg'
date: '2023-06-02T18:50:00.000Z'
author:
  name: Rob Hussey
  picture: '/assets/blog/authors/light-huss.jpg'
ogImage:
  url: '/ogrjhuss.png'
---

## AWS CLI
The first step to modify the hosted repository is to install AWS CLI v2 if not already installed. Instructions are available at [AWS CLI v2 Install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

Next, you will need to configure access for the CLI with credentials that will be able to modify Amplify settings. This could mean an SSO setup or a simple access key / secret access key configuration. Either way, this goes beyond the scope of this article. Instructions are available at [AWS CLI v2 Quickstart](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)

## Make the switch
Run the following command based on the service provider of the new repository:

GitHub:
```
     aws amplify update-app --app-id <APP_ID> --repository <REPO_URL> --access-token <GITHUB_ACCESS_TOKEN>
```
CodeCommit or BitBucket:
```
     aws amplify update-app --app-id <APP_ID> --repository <REPO_URL> --oauthToken <CODECOMMIT_OR_BITBUCKET_TOKEN>
```

The app-id is the last portion of the app ARN (pattern d[a-z0-9]+). You can find this value in AWS Amplify -> App settings -> General.

The repository is the repo url; for example, [this site's repo url](https://github.com/hussrj/static-next-site).

The access-token or oauthToken is a token you will need to create with the service provider. For example, in Github you can go to [your tokens page](https://github.com/settings/tokens) and generate a new token for the app. I used a classic token for this use case. It should have access to admin:repo_hook.

Refer to [Amplify update app reference](https://docs.aws.amazon.com/cli/latest/reference/amplify/update-app.html) for more instructions on the parameters to use.

## Final note
Like me, you might need to go to your app in AWS Amplify console and click 'Reconnect the repository' before the switch will be active.