# NOVA - Personalised AI Chatbot
NOVA is a local AI chatbot powered by the Gemini API, designed to provide a personalized, intelligent, and adaptive conversational experience. Unlike generic chatbots, NOVA combines a custom persona, intent-aware responses, and optional knowledge/context retrieval to make every interaction unique and relevant.

## Description
NOVA is a locally deployed AI chatbot that leverages the Gemini API to provide users with a highly personalized and adaptive conversational experience. 

Unlike standard chatbots that respond in a generic manner, NOVA is designed to think contextually, understand user intent, and communicate with a consistent, intelligent persona. 

This makes it ideal for technical assistance, creative brainstorming, emotional support, or quick guidance.

## Features

### 1. Custom Persona — NOVA

+ NOVA embodies a futuristic mentor persona: calm, analytical, and supportive.

+ Speaks in clear, concise language with optional analogies to explain complex concepts.

+ Maintains a signature communication style, including structured responses, optional examples, and the ability to adapt tone based on context.

+ Ensures a professional, trustworthy, and engaging user experience.

### 2. Intent-Aware Responses

+ NOVA detects the user’s intent before generating responses, tailoring the reply to the type of request.

+ Intent Classification Table:
 
| Intent     | Example Request           | Response Style        |
|------------|--------------------------|----------------------|
| Technical  | Why is my code erroring? | Debug + code steps   |
| Emotional  | I feel stuck             | Supportive, soft tone|
| Creative   | Write slogan ideas       | Brainstorming mode   |
| Short      | Quick steps              | Concise bullet points|


This ensures contextually relevant, precise, and user-tailored answers.

### 3. Adaptive Knowledge Handling

+ NOVA can optionally integrate memory or retrieval systems to recall user preferences or access private knowledge sources.

+ Enables personalized guidance, maintaining continuity across sessions.

+ Can reference technical documentation, notes, or other local data to enhance responses.

### 4. Local Deployment & Privacy

+ NOVA runs locally, leveraging the Gemini API for processing while keeping user interactions private.

+ Minimal latency for real-time responses and the flexibility to customize system behavior.

### 5. Structured Interaction & Output

+ Responses follow a consistent structure: key answer → explanation → optional next step or example.

+ Supports multi-mode communication: quick summaries, in-depth technical guidance, emotional support, or creative ideation.

## Getting Started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.
### Dependencies
* Windows
### Prerequisites
#### 1. Install npm packages

```
npm install
```
#### 2. Install 

```
npm install --save-dev @types/d3
```
### Installing
Create a `.env` file in your project and paste your Gemini API Key

  
```
GEMINI_API_KEY = "Your Gemini API Key"
```

### Executing program
#### Run
```
npm run dev
```
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

* Fork the Project
* Create your Feature Branch `git checkout -b feature/AmazingFeature`
* Commit your Changes `git commit -m 'Add some AmazingFeature`
* Push to the Branch `git push origin feature/AmazingFeature`
* Open a Pull Request
## Author
[Vibitha Varshini S S](https://github.com/ssvibitha)
