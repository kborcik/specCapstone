import React, {useState,useCallback} from "react"
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import axios from "axios";
import './Survey.css'



const surveyJson = {
  
    "title": "Understanding You",
    "completedHtml": "<h3>Thank you for your answers!</h3> <h4>We are glad that you are on the way to help yourself. Your answers help us understand you. We want to help you best we know how, and help you achieve a focused center.</h4>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "Name",
        "title": "Name",
        "isRequired": true
       },
       {
        "type": "checkbox",
        "name": "core values",
        "title": "Which of the following best describe your core values?",
        "description": "Please select five.",
        "isRequired": true,
        "validators": [
         {
          "type": "answercount",
          "text": "Please select no more than three features.",
          "maxCount": 5
         }
        ],
        "choices": [
         {
          "value": "Family",
          "text": "Family"
         },
         {
          "value": "Integrity",
          "text": "Integrity"
         },
         {
          "value": "Freedom",
          "text": "Freedom"
         },
         {
          "value": "Honesty",
          "text": "Honesty"
         },
         {
          "value": "Security",
          "text": "Security"
         },
         {
          "value": "Adventure",
          "text": "Adventure"
         },
         {
          "value": "Loyalty",
          "text": "Loyalty"
         },
         {
          "value": "Kindness",
          "text": "Kindness"
         },
         {
          "value": "Connection",
          "text": "Connection"
         },
         {
          "value": "Teamwork",
          "text": "Teamwork"
         },
         {
          "value": "Intelligence",
          "text": "Intelligence"
         },
         {
          "value": "Career",
          "text": "Career"
         },
         {
          "value": "Creativity",
          "text": "Creativity"
         },
         {
          "value": "Communication",
          "text": "Communication"
         },
         {
          "value": "Humanity",
          "text": "Humanity"
         },
         {
          "value": "Success",
          "text": "Success"
         },
         {
          "value": "Respect",
          "text": "Respect"
         },
         {
          "value": "Innovation",
          "text": "Innovation"
         },
         {
          "value": "Invention",
          "text": "Invention"
         },
         {
          "value": "Quality",
          "text": "Quality"
         },
         {
          "value": "Diversity",
          "text": "Diversity"
         },
         {
          "value": "Commonality",
          "text": "Commonality"
         },
         {
          "value": "Generosity",
          "text": "Generosity"
         },
         {
          "value": "Contributing",
          "text": "Contributing"
         },
         {
          "value": "Spiritualism",
          "text": "Spiritualism"
         },
         {
          "value": "Strength",
          "text": "Strength"
         },
         {
          "value": "Entertain",
          "text": "Entertain"
         },
         {
          "value": "Wealth",
          "text": "Wealth"
         },
         {
          "value": "Speed",
          "text": "Speed"
         },
         {
          "value": "Power",
          "text": "Power"
         }
        ],
        "colCount": 3
       }
      ],
      "title": "Understanding You",
      "description": "What are your core values? What drives your decisions?"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "How often do you put things off until the last minute?",
        "title": "How often do you put things off until the last minute?",
        "isRequired": true,
        "choices": [
         {
          "value": "All the time",
          "text": "All the time"
         },
         {
          "value": "A lot of the time",
          "text": "A lot of the time"
         },
         {
          "value": "Sometimes",
          "text": "Sometimes"
         },
         {
          "value": "Rarely",
          "text": "Rarely"
         },
         {
          "value": "Never",
          "text": "Never"
         }
        ]
       }
      ],
      "title": "Understanding you",
      "description": "What are some of your common obstacles?"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "boolean",
        "name": "Do you ever feel like you are an imposter?",
        "title": "Do you ever feel like you are an imposter?",
        "isRequired": true
       }
      ],
      "title": "Understanding You",
      "description": "What are some of your common obstacles?"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "How often do you start the day determined to get organized, and end the day feeling defeated?",
        "title": "How often do you start the day determined to get organized, and end the day feeling defeated?",
        "isRequired": true,
        "choices": [
         {
          "value": "All the time",
          "text": "All the time"
         },
         {
          "value": "A lot of the time",
          "text": "A lot of the time"
         },
         {
          "value": "Sometimes",
          "text": "Sometimes"
         },
         {
          "value": "Rarely",
          "text": "Rarely"
         },
         {
          "value": "Never",
          "text": "Never"
         }
        ]
       }
      ],
      "title": "Understanding You",
      "description": "What are some of your common obstacles?"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "When talking to others how often do you finish their sentences, change subjects, or ask questions before they're done talking?",
        "title": "When talking to others how often do you finish their sentences, change subjects, or ask questions before they're done talking?",
        "isRequired": true,
        "choices": [
         {
          "value": "All the time",
          "text": "All the time"
         },
         {
          "value": "A lot of the time",
          "text": "A lot of the time"
         },
         {
          "value": "Sometimes",
          "text": "Sometimes"
         },
         {
          "value": "Rarely",
          "text": "Rarely"
         },
         {
          "value": "Never",
          "text": "Never"
         }
        ]
       }
      ],
      "title": "Understanding You",
      "description": "What are some of your common obstacles?"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "How often is your time and energy taken with coping, staying organized, and holding it together with no time for you?",
        "title": "How often is your time and energy taken with coping, staying organized, and holding it together with no time for you?",
        "isRequired": true,
        "choices": [
         {
          "value": "All the time",
          "text": "All the time"
         },
         {
          "value": "A lot of the time",
          "text": "A lot of the time"
         },
         {
          "value": "Sometimes",
          "text": "Sometimes"
         },
         {
          "value": "Rarely",
          "text": "Rarely"
         },
         {
          "value": "Never",
          "text": "Never"
         }
        ]
       }
      ],
      "title": "Understanding You",
      "description": "What are some of your common obstacles?"
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "boolean",
        "name": "Do you struggle to shut out sounds and distractions that don't bother others?",
        "title": "Do you struggle to shut out sounds and distractions that don't bother others?",
        "isRequired": true
       }
      ],
      "title": "Understanding You",
      "description": "Last question"
     }
    ],
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "progressBarType": "questions"
   
};

const SurveyComponent = () => {

  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender) => {
    localStorage.setItem('results',JSON.stringify(sender.data))
    axios.post('http://localhost:4000/api/survey',sender.data)
    console.log(sender);
  },[])
  survey.onComplete.add(surveyComplete)
  
  return (
    <div className="survey">
    <Survey model={survey} />;
    </div>
  )
    
}

export default SurveyComponent;