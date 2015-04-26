# Presentor (Wilreless Presentation Remote)

This is an Android + Desktop application which enables wireless presentation right from your phone. Installation procedure is a bit 
complicated, but this application is only for web based presentations like reveal.js and impress.js (this supports only reveal.js and impress.js for now), 
assuming a reveal.js or impress.js user and lover, I'm assuming you know few basics and can troubleshoot few problems.

## Getting started

### How? Manual Way!

Just execute the following commands:

Assuming you have installed git and node.js already.

Cloning this repository:
```
git clone https://github.com/cyberhck/presentor.git
```
Enter into presentor directory by executing ```cd presentor```

Now, we need to install dependencies which this projects depends on, which you can check on ```package.json``` file.

Installing dependencies:
```
npm install
```
While this may take a little while, it depends on speed of Internet connection. For now, it has 2 dependencies as socket.io and express which 
shouldn't take long.

### Setting up presentation:
Navigate to presentation directory inside presentor directory. Then clone reveal.js or impress.js repository in that directory after deleting .tempFile

## For reveal.js
```
cd presentation
rm .tempFile
git clone https://github.com/hakimel/reveal.js.git . --depth 1
```

This will clone reveal.js in presentation directory,

## For impress.js
```
cd presentation
rm .tempFile
git clone https://github.com/bartaz/impress.js.git presentation --depth 1
```
This will clone impress.js in presentation directory

Now we've to copy heart of presentor to presentation directory, to do so:

execute the following command:
```
cp ../presentor.js presentation/presentor.js
```

## These above steps can be replaced by automatic installer
### Steps for automatic installation.
### Via Wget installs reveal
```
wget https://raw.githubusercontent.com/cyberhck/presentor/master/installer-reveal.sh -O - | sh && cd presentor/presentation/
```
### Via Curl installs impress
```
curl -L https://raw.githubusercontent.com/cyberhck/presentor/master/installer-impress.sh | sh && cd presentor/presentation/
```
### To this step, you have installed presentor and cloned either reveal.js or impress.js

### You can just use the respective names, just replace impress.js or reveal.js in both curl or wget

## Using presentor

Open index.html which is inside presentation directory with any editor, include two JavaScript files inside ```<head>``` 
tag like this:
```
<script type="text/javascript" src="/socket.io/socket.io.js"></script>
<script type="text/javascript" src="presentor.js"></script>
```


You should be ready to deploy now, just edit index.html file inside this directory, then come back to root of presentor by executing ```cd ..``` command.

Now, everything should be done, come to presentor installation directory and prepare for next step:

## Executing server:
```
node index.js
node index.js newpassword #for overriding default password
```


Point localhost:3000 in which should serve your presentation, use ```ifconfig``` command to know your IP Address. You can modify a line which 
says ```password="defaultpassword";``` in index.js file if you want to change the default password, default password is "defaultpassword" 
without quotes.

### Setting up client
Go to [Google PlayStore](https://play.google.com/store/apps/details?id=com.fossdevs.presentor) to download Android Client.

Once you've downloaded client, and you'll be presented with a screen which says "no connection established, please go through menu to connect 
to a presentation", now you should open menu and tap on connect.

Now you'll be presented with a connection activity. Provide IP Address which you noted earlier and the port on which node.js is running 
(default is 3000, but you may edit index.js file to change that)

Now click on connect and it will give you a new screen, use Volume Up key to navigate to next slide and use Volume Down key to navigate to 
previous slide. The switch which says wake lock, when switched on, makes sure your device doesn't lock after few moment of inactivity, use this 
feature on caution as it drains battery.

After presentation is over, just turn off the wake lock switch or kill the application from recent application items, this will turn off wake 
lock.

### Wait, there is reveal.js slides, but where is my presentation?
Well, you've just cloned reveal.js inside reveal.js directory, so now you need to edit that index.html and create your slides, or you can just copy and paste it in index.html if you want.

## Support for other presentation clients.
For now, there is support only for revela.js, but I'm trying to impress.js too. It will never support any Microsoft's presentation client like 
PowerPoint. In near future, I may add support for Libre Impress but that isn't a guarantee. But I promise to bring impress.js support in near 
future, if you don't like to wait, you can go ahead and help me on developing them, you can see contribution summary at the end of this page.

### Licence (The boring stuff)
This product is released under GNU GPL V3

Which means you have freedom to run this product as per your needs, you can learn and modify this product, redistribute this product to your 
friends and neighbor so they are benefited, freedom to improve the program as per your needs, as long as you provide the receiver of this 
product the same freedoms.

### Contribution:

- **Indentation**: 4 level of indentation usinig tabs.
- **Small Commits**: Make large number of small commits.