# Microtask2
# Hello Readers , This API is build  for MicroTask 2 given by HostelDevta
# <u>About this microservice</u>
<ul >
<li style="list-style: none">The visitor count of website is a versatile visitor count and pagwview count of the website which is using a local database in form of an array</li>
<li>The authentication system is designed for signIn and Signup with error handling.</li>
<li>The authentication system uses json web token and  hashing of password with salt to provide reliable security.</li>
<li>The database used is MongoDB</li>
</ul>

# The API is live on  
<p>https://8ejo5c.deta.dev/</p>

# visitor count
<ul >
<li>Method : Get</li>
<li>Endpoint: '/visitor/api'</li>
<li>local</li>
</ul>

#Authentication

<h2>To signup</h2>
<ul >
<li>Method : POST</li>
<li>Endpoint: 'users/signup'</li>
<li>Body parameters(in JSON)</li>
<li>example : </li>
<li>{</li>
<li> "username" : "xyz122222" ,</li>
<li> "email" :  "abc@123.com", </li>
<li>"password" : "111111"</li>
<li>}</li>
</ul>

<h2>To signin</h2>
<ul >
<li>Method : POST</li>
<li>Endpoint: 'users/signin'</li>
<li>Body parameters(in JSON)</li>
<li>example : </li>
<li>{</li>
<li> "username" : "xyz122" ,</li>
<li> "email" :  "abcdef@123.com", </li>
<li>"password" : "111111"</li>
<li>}</li>
</ul>



