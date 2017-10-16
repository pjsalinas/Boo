# Boo
An Alexa Skill to have fun during the Halloween season. You'll be able to ask Alexa to perform some pre-defined sounds for you at the same time she blinks the lights in your house.

## Getting Started
### Prerequisites

You'll need the following:

> IFTTT - Account
> Node.js and npm - installed
> Alexa Skill - Account
> AWS Lambda - Account

### Installing
For IFTTT, go to [IFTTT](http://www.ifttt.com), and register an account.
Prepare a recipe as follow:
```
if - Webhooks
then - Hue blink
```
**Install npm and node.js**
```
http://www.nodejs.org
```

**Alexa Skill**
```
https://developer.amazon.com
Select Alexa Skill
Create a new Alexa Skill
follow the instructions on: https://github.com/Alexa/
```

**AWS Lambda**
```
https://aws.amazon.com, or run the script from the client, or use a library as Claudia to upload your lambda function.
```

## Running the tests
For the skill to work follow these directives:
Alexa, open Boo - to get a description of the skill
Alexa, ask Boo **to make the {Sound} sound**
Alexa, ask Boo **for the {Sound} sound**

And, for the **{Sound}**. Replace it with the following: dog, creepy, spooky, story, laugh, jaws

To add or edit the sounds, just open the [sounds.js](https://github.com/pjsalinas/Boo/blob/master/lambda/sounds.js), and add/edit/delete sounds.

## Authors
Pedro J. Salinas

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Hat tip to anyone who's code was used
Inspiration
etc

### TODO: 
* Using the Onomatopaeia of the sound make it more real.
* Develop more sounds.