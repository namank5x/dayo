# Dayo is a Theme for Ghost Blogging Platform

## The Theme Documentation is out of date as it was completely re-designed.
## However the theme is complete and works as expected, to run it do the following

* Download this repository or clone it
* Add it to your themes folder in ghost/content/themes
* Run your Ghost-Blog and in setting activate the theme named "Dayo"

## You can view the demo below :
## [Demo](https://theschooloftech.com)

***

###Welcome to Dayo theme help document, here you will find all the instructions you need to use the theme

###Theme Details

* **Version : 1.0.0**
* **Date of Release : 30/6/2016**



Please note that incase of any help you can always reach out to me via my website
,email or twitter

* email   : namankamran@gmail.com
* website : [namankamra.com](https://namankamra.com)
* twitter : [@namkam5](http://twitter.com/namkam5)

###The documentation is divided into 4 main points for ease of understanding.
which may further be divided into sub points.

1. Installation and setup
2. html/hbs file structure
3. CSS features and customizations
4. Understanding ghost template code.
5. 3rd party Resources used

----
##Before you start with the installation and setup there are 2 possibilities.
please choose which one is yours and proceed as given below

* A. You are using ghost(pro) for your blog
* B. You are Hosting ghost on your own server



###A. You are using ghost(pro) for your blog

##1. Installation and Setup

Step 1. Go to your ghost settings which will be at the following url
        {your blog url}/ghost and click on upload a new theme

>Here upload the ZIP file of the theme NOT the unzipped folder.

** CONGRATULATIONS !** Your theme is now installed and you can view your ghost blog
with the newly installed theme

However I highly recommend that you read below on how to customize it to look
exactly like how you want your blog to look and remove the dayo branding throughout
to replace with your own brand.



###B. You are hosting ghost on your own server

##1. Installation and setup

**Step 1.** Go to your ghost installation folder and paste the UNZIPPED theme folder in the following ghost installation directory (your ghost version number might be different)

        ghost-0.8.0/content/themes/{paste here}

** Step 2.**  Go to your ghost settings which will usually be at the following url
        {your-blog-url}/ghost this is where you setup your ghost after installation

**Step 3.** Here under Settings > general you will find a theme option below
        here in the drop down menu you will find the theme named dayo

**Step 4.** Select it and click on save on the top right hand corner

** CONGRATULATIONS !**  Your theme is now installed you can now view your blog in the new
theme.

However I highly recommend that you read below on how to customize it to look
exactly like how you want your blog to look and remove the dayo branding throughout
to replace with your own brand.



##2. HTML / hbs file structure

The theme uses google's material design lite library [Material Design Lite](http://getmdl.io)

First let me explain what each and every file is doing in the theme. I will then guide
you through some basic configuration that you must do on every page to make the theme
suit your needs

**default.hbs** : This the skeleton of the theme. The parts of the theme that are
              present on every page are included here like the top navigation
              menu or the navigation drawer that pops out in mobile devices.

**index.hbs**   : This is the main posts page where all your posts are seen
              you can edit how each and every element looks here

**page.hbs**    : This is the default layout for every static page that you make in
              ghost. you can customize things here like if you want to remove the
              header add commenting or remove commenting.

**page-features.hbs** : This contains the code to modify any individual page. so if you have
                    static page called features you can make a new file called
                    page-{your-page-name} and then that particular page can have its own
                    unique styling

**post.hbs** : This page contains how an individual post looks likes. Here you can edit
            things like what your posts should contain. eg: you want the tags to display
            at the end of each post or not etc.

**header.hbs** : This is the header part of your theme where your blog title is displayed
                  along with the blog description and an email form. Here you can accept
                  upto 1000 emails per month using the formspree services [fromspree.io](http://formspree.io)
                  which I will explain how to configure.

### Default.hbs

Here you would want to change a few things

* The title of your blog in the navigation menu. This title is commented out as "Title"
    the default.hbs file so you can change it to the name of your blog.

* The navigation items. These are commented out as "Navigation". you can change the options
    in the navigation menu.

    Please make sure to change the navigation menu options in both the desktop and mobile
    versions they are commented out respectively.

* The footer text. You can change the footer text to suit your needs. Its is very evident
    once you open the default.hbs file.


### index.hbs

Here you might want to change a few things as well

* The main header. You can comment out the header if you don't want it to display on your
home page like this .

>    Change the second line of the file from

    {{> header}} --------> {{!> header}}

adding an exclamation in front just comments out the header and hence won't be seen on your
blog. You can do the same on every page.

* The tags. If you don't want the tags to show after every post . you can comment
    the part between {{#if tags}} and  {{/if}}

    similarly you can comment out whatever part you don't want in your blog

* The social icons.. I have provided support for 8 sociall icons however if you want
    to add more or different you can always reach out to me I will get back to you asap.

>here you can comment out the social icons you don't want and let the ones you want remain
    this page is also heavily commented to help you understand what each and every social icon
    is doing.

* The categories. There is a categories box under the social icon box. You can change the categories here
    It is recommended that these categories be the tags that you may create in your ghost blog.

>    so to add a catagory you can do the following in the index.hbs file eg:


    <li>  <a href="{{@blog.url}}/tag/{{your-tag-name}}"class="catlist"> {{your-tag-name}} </a><br /> </li>

you can add the following line to add as many tags as you want to your theme.

5 . The Box four contains random text. you can add whatever you want to write over here.
    you can even comment out the whole box if you want to remove this box from your own theme.
>


**PLEASE MAKE SURE THAT WHATEVER CHANGES YOU MAKE, YOU MAKE IT ON BOTH THE WEB AND MOBILE
    VERSION ... THE MOBILE VERSION IS RIGHT BELOW THE WEB VERSION UNDER "small screen layout"**


### page.hbs

This file shows the template of the static pages and can have lot of variations
the following are the variations that you can have for the this page.

* Static page with header
* Static page without header

>and for both the above variations you can have the following

* Static page with sidebar and comments
* Static page no sidebar and comments
* Static page with side bar no comments
* Static page no sidebar no comments

** The variations can be done as follows **


>By default every static page will show as
with sidebar and no comments

*  The page-features contains code to show a static page as

> no sidebar with comments
   so if you want to have your page with sidebar and no comments

   you can make a new file
   and name it
**   **

    page-{{yourpagename.hbs}}

  then paste the code from there into this new page

*  Like wise if you want to remove comments from any of these pages just comment out the
    div that says
** **

    <div id = disqus_thread> </div>
and then your commenting system won't load.

**ONCE AGAIN PLEASE REMEMBER TO MAKE CHANGES IN BOTH THE PLACES TO MAINTAIN UNIFORMITY,
    THE MOBILE VERSION OF YOUR WEBSITE WILL BE UNDER THE COMMENT "mobile screen div"**

### post.hbs

This page contains how every post looks like. The only things you would want to change here is the commenting system
and the header part ie if you want to keep a header or not.

*  The main header. You can comment out the header if you don't want it to display on your
    individual posts like this .
    Change the second line of the file from
** **

    {{> header}} --------> {{!> header}}

adding an exclamation in front just comments out the header and hence won't be seen on your
    blog.

*  Like wise if you want to remove comments from any of these pages just comment out the
    div that says
** **
    <div id = disqus_thread> </div>

and then your commenting system won't load.

**ONCE AGAIN PLEASE REMEMBER TO MAKE CHANGES IN BOTH THE PLACES TO MAINTAIN UNIFORMITY
    THE MOBILE VERSION OF YOUR WEBSITE WILL BE UNDER the comment "mobile screen div"**


### header.hbs

This page displays the header where the title
and the description of your blog go.

> You can recieve upto 1000 emails every month using a service called [formspree](http://formspree.io)

Here's how to configure formspree

    <form id="emailfield" action="https://formspree.io/your@email.com"
      method="POST">
    <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="email" name ="_replyto" id="sample1">
    <input type="hidden" name="_next" value="//site.io/thanks.html" />
    <label style="text-align:center"class="mdl-textfield__label" for="sample1">Enter your Email</label>
    </div>

Here where it says **_your@email.com_** replace it with your email id..

Also where it says **_site.io/thanks.html_** replace it will with the url you want the people to go to after submitting the form.

THATS IT! YOU'RE DONE! . now the first time someone enters an email you will receive verification and after that you will get an email with whoever signed up for your website.

## 3. CSS File structure

The theme has just one CSS file *"styles.css"*  which styles all the pages.

>This file is heavily commented to let you know what each and every component is doing
for eg:

If you want to change the color of your header you can change the following code



    This is will change the color of the header where the navigation options are present

    #top-header{
         background-color: {your-favorite-color};
    }

    this changes the color of the header where your title and blog description are present

    .header_uber{
         background-color: {your-favorite color};
         margin-top:-2em;
         height: 300px;
     }



##4. Understanding Ghost templating language

If you didn't know before the parts in the code where i have inserted things inside
double curly brackets is where ghost plugs in its own code to display the content

the templating language that ghosts uses with double brackets is
called handlebars you can visit their website here
[Handlebars](http://handlebarsjs.com/)


If you want a further understanding on how what ghost is inserting where you can checkout
their documentation at  
[Ghost Documentation](http://themes.ghost.org/)

##5. Third Party Resources used

All the resources used are open source and provide MIT Licence and hence do not infringe any copyrights.

[Material Design Lite](http://getmdl.io): This is a library of web components developed by Google

[Font Awesome](http://fontawesome.io/) : This is a resource for providing icons and fonts

[Google Fonts](http://fonts.google.com): This is a font library provided by Google

[Formspree](http://formspree.io): This is an application that allows us to recieve form submissions on our website.

## Thank You

Thank you for purchasing the Dayo theme. If you liked it please leave a rating on the envato theme page.

Also just to remind you, if anything was not covered here feel free to reach me at.

* email   : namankamran@gmail.com
* website : [namankamra.com](https://namankamra.com)
* twitter : [@namkam5](http://twitter.com/namkam5)
# dayo
