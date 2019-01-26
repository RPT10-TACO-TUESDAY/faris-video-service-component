# Project Name

> This is the repo for the HR RPT10 FEC Project on the Twitch.TV Video Service. This repo renders the video player and video collection to the page.

## Related Projects

  - https://github.com/RPT10-TACO-TUESDAY/anna-chat-component
  - https://github.com/RPT10-TACO-TUESDAY/george-categories-component
  - https://github.com/RPT10-TACO-TUESDAY/milena-menu-bar-component
  - https://github.com/RPT10-TACO-TUESDAY/faris-twitch-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To get a better understanding of how you can create a video service module for Twitch.tv. This repo will render the first video in the sample collection to the DOM. The collection can also be accessed by adding '/videosAll' to the end of the path.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v11.6.0

## Development

### Installing Dependencies

From within the root directory:

```sh
-npm install
```
## Setup

### Initialize Webpack
```sh
-npm run build
```

### Postgresql & Server Instructions:

  #### Install after running npm install
  ```sh
  brew install postgresql
  ```

  #### Connect to default database:
  ```sh
  psql postgres
  ```

  #### Create a new role:
  ```sh
  CREATE ROLE taco WITH LOGIN PASSWORD 'tuesday';
  ```
  #### Allow the new role, taco, to create databases:
  ```sh
  ALTER ROLE taco CREATEDB;
  ```
  #### Create the database:
  ```sh
  CREATE DATABASE twitchvid;
  ```
  #### Connect to the new database:
  ```sh
  \c twitchvid
  ```
  #### Create tables and start server:
  ```sh
  npm start
  ```
  #### To seed sample data into the database, in another terminal window run:
  ```sh
  npm run seed
  ```
  #### Helpful psql command tips can be found here:
  ```sh
  https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546
  ```

### Making API Calls to Twitch.tv

-Go to dev.twitch.com and sign up for a new account
-Locate your client-ID with the instructions provided on the website
-Follow the API instructions for more info on how to obtain specific sets of data. Here is one example of obtaining data from a Twitch Streamer:

```sh
  curl -H 'Client-ID: <ClientID Here>' \
-X GET 'https://api.twitch.tv/helix/videos?user_id=19070311&first=100'
```