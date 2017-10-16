/**
 * Amazon Alexa Skill
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well as testing instructions are located at
 * https://github.com/pjsalinas/alexa/Boo
 */

'use strict';

const Alexa = require('alexa-sdk');
const sounds = require('./sounds');


const APP_ID = undefined; // TODO: replace with your app ID (optional)

const languageStrings = {
  'en': {
    translation: {
      SOUNDS: sounds.SOUNDS_EN_US,
      SKILL_NAME: 'Boo',
      WELCOME_MESSAGE: 'Welcome to %s. You can ask Alexa to make different sounds, such as: jaws, dog, creepy, and spooky... Now how can I help you with?',
      WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
      HELP_MESSAGE: 'You can ask questions such as, make the jaws type, or you can say exit... Now how can I help you with?',
      HELP_REPROMPT: 'You can say things like make the dog type, or you can say exit... Now, how can I help you with?',
      STOP_MESSAGE: 'Goodbye!',
      SOUND_REPEAT_MESSAGE: 'Try saying repeat.',
      SOUND_NOT_FOUND_WITH_ITEM_NAME: 'the sound for %s. ',
      SOUND_NOT_FOUND_WITHOUT_ITEM_NAME: 'that sound. ',
      SOUND_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
      SOUND_NOT_FOUND_REPROMPT: 'What else can I help with?',
    },
  },
  'en-US': {
    translation: {
      SOUNDS: sounds.SOUNDS_EN_US,
      SKILL_NAME: 'American Boo for Hallowen',
    },
  },
};


const handlers = {
  // Use LauchRequest, instead of NewSession if you want to use the one-
  // Alexa, ask [my-skill-invocation-name] to (do something) ...
  'LaunchRequest': function () {
    this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
    this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');

    this.response.speak(this.attributes.speechOutput)
      .listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
  },

  'SoundIntent': function () {
    const itemSlot = this.event.request.intent.slots.Sound;
    let itemName;
    if (itemSlot && itemSlot.value) {
      itemName = itemSlot.value.toLowerCase();
    }

    let sounds = this.t('SOUNDS');
    let sound = sounds[itemName];
    this.attributes.speechOutput = sound;

    if(sound) {
      this.attributes.speechOutput = sound;
      this.attributes.repromptSpeech = this.t('SOUND_REPEAT_MESSAGE');

      this.response.speak(this.attributes.speechOutput);
        //.listen(this.attributes.repromptSpeech);
      this.emit(':responseReady');

    } else {
      // Could not find the sound
      let speechOutput = this.t('SOUND_NOT_FOUND_MESSAGE');
      let repromptSpeech = this.t('SOUND_NOT_FOUND_REPROMPT');
      if (itemName) {
        speechOutput += this.t('SOUND_NOT_FOUND_WITH_ITEM_NAME', itemName);
      } else {
        speechOutput += this.t('RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME');
      }
      speechOutput += repromptSpeech;

      this.attributes.speechOutput = speechOutput;
      this.attributes.repromptSpeech = repromptSpeech;

      this.response.speak(speechOutput);
        //.listen(repromptSpeech);
      this.emit(':responseReady');
    }

  },

  'AMAZON.HelpIntent': function () {
    this.attributes.speechOutput = this.t('HELP_MESSAGE');
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT');

    this.response.speak(this.attributes.speechOutput)
      .listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
  },

  'AMAZON.RepeatIntent': function () {
    this.response.speak(this.attributes.speechOutput)
      .listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
  },

  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },

  'AMAZON.CancelIntent': function () {
    this.emit('SessionEndedRequest');
  },

  'SessionEndedRequest': function () {
    console.log(`Session ended: ${this.event.request.reason}`);
  },

  'Unhandled': function () {
    this.attributes.speechOutput = this.t('HELP_MESSAGE');
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
    this.response.speak(this.attributes.speechOutput)
      .listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
  },
 };

 exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;

  // To enable string internationalization (i18n) features, set a resource
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
 };

 /*
  Helper functions:
  */