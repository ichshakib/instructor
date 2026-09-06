# ChatGPT: Learning Prompt Engineering with 100+ Examples

> **Authors**: José Alberto Hernández, Javier Conde, Blanca Querol, Gonzalo Martínez, Pedro Reviriego  
> **Original File**: `book_english_version.pdf`  
> **Total Pages**: 167  
> **Extraction Engine**: PyMuPDF High-Fidelity Extraction  

---

## Table of Contents (Book Outline)

- [Before we start (Page 6)](#page-6)
- [Warming up (Page 8)](#page-8)
  - [What is ChatGPT? (Page 8)](#page-8)
  - [How do I get access to an LLM (Page 12)](#page-12)
  - [Possibilities and uses (Page 18)](#page-18)
  - [What is a prompt? (Page 19)](#page-19)
  - [First prompts: movie recommendations (Page 20)](#page-20)
  - [First prompts: training plans (Page 23)](#page-23)
  - [Summary and exercises (Page 34)](#page-34)
- [Some basic techniques (Page 36)](#page-36)
  - [Simple prompts to obtain information (Page 36)](#page-36)
  - [Summarizing and structuring information (Page 38)](#page-38)
  - [Generating artistic text (Page 41)](#page-41)
  - [Seeking numerical data and transforming it (Page 47)](#page-47)
  - [Working with different languages (Page 48)](#page-48)
  - [Summary and exercises (Page 51)](#page-51)
- [Advanced techniques (Page 54)](#page-54)
  - [Mimicking historical figures and assuming roles (Page 54)](#page-54)
  - [Learning with small examples (Page 59)](#page-59)
  - [Assigning numerical values to texts (Page 61)](#page-61)
  - [Arranging elements (Page 63)](#page-63)
  - [Planning and approximate calculations for day-to-day routines (Page 66)](#page-66)
  - [Assisting in reasoning step by step (Page 68)](#page-68)
  - [Summary and exercises (Page 74)](#page-74)
- [Use cases and applications (Page 76)](#page-76)
  - [Laws, contracts and claims (Page 76)](#page-76)
  - [Education (Page 83)](#page-83)
  - [Communication (Page 87)](#page-87)
  - [Administration and numbers (Page 94)](#page-94)
  - [Companies (Page 99)](#page-99)
  - [Summary and exercises (Page 101)](#page-101)
- [Playing with images (Page 104)](#page-104)
  - [Medical images (Page 104)](#page-104)
  - [Analyzing text within images (Page 107)](#page-107)
  - [Analyzing graphics (Page 115)](#page-115)
  - [Analyzing general images (Page 122)](#page-122)
  - [Artistic creation (Page 141)](#page-141)
  - [Summary and exercises (Page 152)](#page-152)
- [Audio, conversations, customization, limits and risks (Page 154)](#page-154)
  - [Alternative uses (Page 154)](#page-154)
  - [Customized instructions (Page 158)](#page-158)
  - [Plugins (Page 160)](#page-160)
  - [Limits and risks (Page 162)](#page-162)
- [In conclusion (Page 164)](#page-164)
- [Página en blanco (Page 1)](#page-1)
- [Página en blanco (Page 1)](#page-1)
- [Página en blanco (Page 1)](#page-1)
- [Página en blanco (Page 1)](#page-1)

---

## Page Index

- [Page 1](#page-1)
- [Page 2](#page-2)
- [Page 3](#page-3)
- [Page 4](#page-4)
- [Page 5](#page-5)
- [Page 6](#page-6)
- [Page 7](#page-7)
- [Page 8](#page-8)
- [Page 9](#page-9)
- [Page 10](#page-10)
- [Page 11](#page-11)
- [Page 12](#page-12)
- [Page 13](#page-13)
- [Page 14](#page-14)
- [Page 15](#page-15)
- [Page 16](#page-16)
- [Page 17](#page-17)
- [Page 18](#page-18)
- [Page 19](#page-19)
- [Page 20](#page-20)
- [Page 21](#page-21)
- [Page 22](#page-22)
- [Page 23](#page-23)
- [Page 24](#page-24)
- [Page 25](#page-25)
- [Page 26](#page-26)
- [Page 27](#page-27)
- [Page 28](#page-28)
- [Page 29](#page-29)
- [Page 30](#page-30)
- [Page 31](#page-31)
- [Page 32](#page-32)
- [Page 33](#page-33)
- [Page 34](#page-34)
- [Page 35](#page-35)
- [Page 36](#page-36)
- [Page 37](#page-37)
- [Page 38](#page-38)
- [Page 39](#page-39)
- [Page 40](#page-40)
- [Page 41](#page-41)
- [Page 42](#page-42)
- [Page 43](#page-43)
- [Page 44](#page-44)
- [Page 45](#page-45)
- [Page 46](#page-46)
- [Page 47](#page-47)
- [Page 48](#page-48)
- [Page 49](#page-49)
- [Page 50](#page-50)
- [Page 51](#page-51)
- [Page 52](#page-52)
- [Page 53](#page-53)
- [Page 54](#page-54)
- [Page 55](#page-55)
- [Page 56](#page-56)
- [Page 57](#page-57)
- [Page 58](#page-58)
- [Page 59](#page-59)
- [Page 60](#page-60)
- [Page 61](#page-61)
- [Page 62](#page-62)
- [Page 63](#page-63)
- [Page 64](#page-64)
- [Page 65](#page-65)
- [Page 66](#page-66)
- [Page 67](#page-67)
- [Page 68](#page-68)
- [Page 69](#page-69)
- [Page 70](#page-70)
- [Page 71](#page-71)
- [Page 72](#page-72)
- [Page 73](#page-73)
- [Page 74](#page-74)
- [Page 75](#page-75)
- [Page 76](#page-76)
- [Page 77](#page-77)
- [Page 78](#page-78)
- [Page 79](#page-79)
- [Page 80](#page-80)
- [Page 81](#page-81)
- [Page 82](#page-82)
- [Page 83](#page-83)
- [Page 84](#page-84)
- [Page 85](#page-85)
- [Page 86](#page-86)
- [Page 87](#page-87)
- [Page 88](#page-88)
- [Page 89](#page-89)
- [Page 90](#page-90)
- [Page 91](#page-91)
- [Page 92](#page-92)
- [Page 93](#page-93)
- [Page 94](#page-94)
- [Page 95](#page-95)
- [Page 96](#page-96)
- [Page 97](#page-97)
- [Page 98](#page-98)
- [Page 99](#page-99)
- [Page 100](#page-100)
- [Page 101](#page-101)
- [Page 102](#page-102)
- [Page 103](#page-103)
- [Page 104](#page-104)
- [Page 105](#page-105)
- [Page 106](#page-106)
- [Page 107](#page-107)
- [Page 108](#page-108)
- [Page 109](#page-109)
- [Page 110](#page-110)
- [Page 111](#page-111)
- [Page 112](#page-112)
- [Page 113](#page-113)
- [Page 114](#page-114)
- [Page 115](#page-115)
- [Page 116](#page-116)
- [Page 117](#page-117)
- [Page 118](#page-118)
- [Page 119](#page-119)
- [Page 120](#page-120)
- [Page 121](#page-121)
- [Page 122](#page-122)
- [Page 123](#page-123)
- [Page 124](#page-124)
- [Page 125](#page-125)
- [Page 126](#page-126)
- [Page 127](#page-127)
- [Page 128](#page-128)
- [Page 129](#page-129)
- [Page 130](#page-130)
- [Page 131](#page-131)
- [Page 132](#page-132)
- [Page 133](#page-133)
- [Page 134](#page-134)
- [Page 135](#page-135)
- [Page 136](#page-136)
- [Page 137](#page-137)
- [Page 138](#page-138)
- [Page 139](#page-139)
- [Page 140](#page-140)
- [Page 141](#page-141)
- [Page 142](#page-142)
- [Page 143](#page-143)
- [Page 144](#page-144)
- [Page 145](#page-145)
- [Page 146](#page-146)
- [Page 147](#page-147)
- [Page 148](#page-148)
- [Page 149](#page-149)
- [Page 150](#page-150)
- [Page 151](#page-151)
- [Page 152](#page-152)
- [Page 153](#page-153)
- [Page 154](#page-154)
- [Page 155](#page-155)
- [Page 156](#page-156)
- [Page 157](#page-157)
- [Page 158](#page-158)
- [Page 159](#page-159)
- [Page 160](#page-160)
- [Page 161](#page-161)
- [Page 162](#page-162)
- [Page 163](#page-163)
- [Page 164](#page-164)
- [Page 165](#page-165)
- [Page 166](#page-166)
- [Page 167](#page-167)

---

# Book Content

<a id="page-1"></a>

---

### [Page 1]

*(Image / Blank Divider Page)*

<a id="page-2"></a>

---

### [Page 2]

ChatGPT
Learning prompt
engineering with 100+
examples
José Alberto Hernández
Javier Conde
Blanca Querol
Gonzalo Martínez
Pedro Reviriego
Madrid, 2024

<a id="page-3"></a>

---

### [Page 3]

José Alberto Hernández
Javier Conde
Blanca Querol 
Gonzalo Martínez 
Pedro Reviriego
Print version available in: https://www.amazon.com/ChatGPT-Learning-prompt-
engineering-examples-ebook/dp/B0CYQLM4HH

<a id="page-4"></a>

---

### [Page 4]

iii
Contents
Before we start
1
Warming up
3
What is ChatGPT?
. . . . . . . . . . . . . . . . . . . . . . . . . . .
3
How do I get access to an LLM . . . . . . . . . . . . . . . . . . . .
7
Possibilities and uses . . . . . . . . . . . . . . . . . . . . . . . . . .
13
What is a prompt?
. . . . . . . . . . . . . . . . . . . . . . . . . . .
14
First prompts: movie recommendations . . . . . . . . . . . . . . .
15
First prompts: training plans . . . . . . . . . . . . . . . . . . . . .
18
Summary and exercises . . . . . . . . . . . . . . . . . . . . . . . .
29
Some basic techniques
31
Simple prompts to obtain information . . . . . . . . . . . . . . . .
31
Summarizing and structuring information . . . . . . . . . . . . .
33
Generating artistic text . . . . . . . . . . . . . . . . . . . . . . . . .
36
Seeking numerical data and transforming it
. . . . . . . . . . . .
42
Working with different languages . . . . . . . . . . . . . . . . . .
43
Summary and exercises . . . . . . . . . . . . . . . . . . . . . . . .
46
Advanced techniques
49
Mimicking historical figures and assuming roles . . . . . . . . . .
49
Learning with small examples
. . . . . . . . . . . . . . . . . . . .
54
Assigning numerical values to texts . . . . . . . . . . . . . . . . .
56
Arranging elements
. . . . . . . . . . . . . . . . . . . . . . . . . .
58
Planning and approximate calculations for day-to-day routines .
61
Assisting in reasoning step by step . . . . . . . . . . . . . . . . . .
63
Summary and exercises . . . . . . . . . . . . . . . . . . . . . . . .
69
Use cases and applications
71
Laws, contracts and claims
. . . . . . . . . . . . . . . . . . . . . .
71
Education
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
78
Communication . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
82
Administration and numbers . . . . . . . . . . . . . . . . . . . . .
89
Companies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
94

<a id="page-5"></a>

---

### [Page 5]

iv
Summary and exercises . . . . . . . . . . . . . . . . . . . . . . . .
96
Playing with images
99
Medical images . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
99
Analyzing text within images . . . . . . . . . . . . . . . . . . . . .
102
Analyzing graphics . . . . . . . . . . . . . . . . . . . . . . . . . . .
110
Analyzing general images . . . . . . . . . . . . . . . . . . . . . . .
117
Artistic creation . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
136
Summary and exercises . . . . . . . . . . . . . . . . . . . . . . . .
147
Audio, conversations, customization, limits and risks
149
Alternative uses . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
149
Customized instructions . . . . . . . . . . . . . . . . . . . . . . . .
153
Plugins . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
155
Limits and risks . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
157
In conclusion
159

<a id="page-6"></a>

---

### [Page 6]

Before we start
I
n November 2022, OpenAI announced ChatGPT, reaching a
hundred million users in just a few days. This and other tools
are known as Large Language Models (LLMs), and they enable a
multitude of text-related tasks, representing a qualitative leap in
the development of Artificial Intelligence. Since its introduction, a
group of professors and students from Universidad Carlos III and
Universidad Politécnica de Madrid (Spain) have been studying
the potential and limitations of ChatGPT and its competitors in
numerous research projects. However, these research works are
aimed at a specialized and limited audience and do not reach the
general public. That is why we have decided to write this book,
whose target audience is the general public, and aims to showcase
the great capabilities of this innovative tool.
Before the reader embarks on exploring the possibilities of the
new artificial intelligence tools presented in the rest of the book,
we want to make clear who it is aimed at and what its objectives
are. Starting from the beginning: we are not facing a book but
rather a user guide or a set of recipes to understand and use these
tools. Furthermore, a book often comes into being to endure over
time, yet in our case, we know that it will be obsolete within a
few years, perhaps even months, of being published, in line with
the ephemeral trend that permeates our society and the rapid
development of artificial intelligence.
Setting aside considerations about the terminology used to
refer to this document, our primary goal is to bring artificial
intelligence tools closer to the generic public, especially to people
who are not familiar with computing. In our opinion, we are
facing a technological revolution similar to what the Internet was

<a id="page-7"></a>

---

### [Page 7]

2
chatgpt: learning prompt engineering with 100+ examples
three or four decades ago or the early telephones were over a
century ago. Artificial Intelligence is going to enter into our lives
(in fact, it has already entered) just as email, the web, or even
WhatsApp did.
Therefore, it is crucial for society as a whole to understand the
possibilities of this new technology in order to take advantage of
it. In summary, this book is aimed at people who do not know
or have used ChatGPT or other similar tools or have done so in
a very superficial way and want to discover it in a simple and
enjoyable manner through example-based learning.
We also find it interesting to recall the importance that Socrates
placed on questions in the process of acquiring knowledge.
Interestingly, in a similar vein, the way we make/formulate
queries (also known as prompts) plays a crucial role in using
ChatGPT and similar AI tools. In other words, the teachings of
the classics remain valid for artificial intelligence.
Before starting to interact with ChatGPT, we want to express
our gratitude for the support we have received in the elaboration
of this book. Thanks to Elena Merino and Miguel González
for helping us learn about ChatGPT, language, and artificial
intelligence. Our appreciation extends to Ana Reviriego
and David Larrabeiti for reviewing the book and providing
comments and suggestions, as well as to the members of the
Next-Generation Internet Group (GING) at the Technical School
of Telecommunication Engineers of the Universidad Politécnica
de Madrid and the Advanced Switching and Communications
Technologies Group (ADSCOM) at Universidad Carlos III for
creating an environment in which to research and learn. Lastly,
we would like to thank OpenAI for supporting our research
through their researcher access program.
José Alberto Hernández Gutiérrez, Univ. Carlos III de Madrid.
Javier Conde Díaz, Univ. Politécnica de Madrid.
Blanca Querol Álvarez-Buylla, Univ. Politécnica de Madrid.
Gonzalo Martínez Ruiz de Arcaute, Univ. Carlos III de Madrid.
Pedro Reviriego Vasallo, Univ. Politécnica de Madrid.

<a id="page-8"></a>

---

### [Page 8]

Warming up
What is ChatGPT?
C
hatGPT is a generative artificial intelligence (AI) tool that
can be asked to perform numerous tasks using specific
prompts. To warm up, we will ask ChatGPT some basic concepts
about itself, prompts, and other generative AI models. Leaving
aside strictness and technical details, the basis of these artificial
intelligence tools is to try to ’guess’ the next word, pixel, musical
note, etc., generically referred to as a ’token.’ For example, if I
write the following sentence ’My friend Juan is from Madrid and
is 45,’ the word that completes the sentence could be ’years,’ but it
could also be ’friends,’ or even ’cars.’ The artificial intelligence
would choose the word that is most frequently used in the
context of the given sentence. In other words, we can understand
generative artificial intelligence similarly as the predictive text on
a mobile phone but with a much higher accuracy.
Prompt 1
What is generative artificial intelligence?
ChatGPT answers...
Generative artificial intelligence refers to a subset of AI models and
algorithms designed to generate new, original content, whether it’s
images, text, music, or other forms of data. These models are trained on
large datasets and learn patterns, structures, and relationships within
the data to create new content that is similar in style or structure to the
training data.

<a id="page-9"></a>

---

### [Page 9]

4
chatgpt: learning prompt engineering with 100+ examples
Some popular generative AI models include:
1. Generative Adversarial Networks (GANs): These consist of two neural
networks, a generator, and a discriminator, which work against each
other. The generator creates new data samples, while the discriminator
tries to differentiate between real and generated data. Through this
adversarial process, GANs produce increasingly realistic outputs.
2. Variational Autoencoders (VAEs): VAEs are a type of neural network
that learns the underlying structure of input data and generates new
data points by sampling from the learned distribution.
3. Recurrent Neural Networks (RNNs) and Transformers: These models
can generate sequences of data, such as text or music, by predicting the
next elements based on patterns learned from training data.
Generative AI has found applications in various fields, including
art, music composition, image generation, text-to-image synthesis,
language translation, drug discovery, and more. However, ethical
considerations about the use and potential misuse of generated content,
such as deepfakes, are important aspects to address as this technology
progresses.
Prompt 2
What is a prompt for ChatGPT and what does prompt
engineering entail?
ChatGPT answers...
A prompt for ChatGPT is a specific input or query provided to the
language model to guide its response or generate desired output. It
serves as the starting point for the AI to understand what kind of
information or response is expected. For instance, if you’re seeking
information about a topic, the prompt would be the question or
keywords related to that subject.
Prompt engineering involves crafting these prompts in a way that
elicits accurate, relevant, and useful responses from the AI. It requires

<a id="page-10"></a>

---

### [Page 10]

warming up
5
understanding the capabilities and limitations of the AI model and
structuring the prompt to effectively communicate the desired task or
information needed.
The effectiveness of the prompt greatly influences the AI’s output.
Well-crafted prompts can steer the AI toward producing more accurate,
relevant, and helpful responses, making prompt engineering an essential
aspect of interacting with AI models like ChatGPT.
Prompt 3
What are LLMs and what is their origin?
ChatGPT answers...
Large Language Models (LLMs) are advanced artificial intelligence
systems specifically designed to understand, process, and generate
human-like text. These models have the capacity to learn intricate
patterns, context, and relationships within language data, enabling
them to perform various natural language processing tasks.
The origin of LLMs can be traced through the evolution of natural
language processing and machine learning techniques. Early
developments in recurrent neural networks (RNNs) and long short-term
memory (LSTM) networks laid the foundation for understanding
sequences of data, including language. These models, however, had
limitations in capturing long-term dependencies in text.
The introduction of the Transformer architecture, notably with Google’s
BERT (Bidirectional Encoder Representations from Transformers) model
in 2018, marked a significant advancement in capturing contextual
information bidirectionally. BERT demonstrated the effectiveness of
pretraining on vast amounts of text data to understand context and
semantics.
Subsequently, OpenAI’s GPT (Generative Pre-trained Transformers)
series, starting with GPT-1 in 2018 and progressing to GPT-3 in 2020,
showcased the potential of scaled-up Transformer-based models. GPT
models use unsupervised learning on extensive datasets to pretrain
across diverse language tasks, allowing them to generate coherent

<a id="page-11"></a>

---

### [Page 11]

6
chatgpt: learning prompt engineering with 100+ examples
text and perform tasks like translation, summarization, and question
answering.
These developments represent a culmination of progress in deep
learning, focusing on understanding and generating human-like text.
However, the rise of LLMs also raises ethical concerns, including biases
in language data, privacy issues, and potential misuse, prompting
ongoing discussions about responsible AI deployment and risk
mitigation.
In summary, LLMs or large language models like ChatGPT are
complex neural networks (transformers) trained with millions of
documents to predict the next word. This way, the LLM learns
about language through examples. LLMs are capable of working
with text in a variety of applications, for example:
• Text generation: LLMs can be used to generate creative text,
such as poems, programming code, scripts, musical pieces,
emails, letters, etc.
• Language translation: LLMs can be used for language
translation in a more accurate and efficient manner than
traditional methods.
• Text summarization: LLMs can be used to generate concise and
accurate summaries of text.
• Question answering: LLMs can be used to respond to
questions in an informative way, even if these are open-ended,
challenging, or unusual ones.
LLMs are still in development, but they have the potential to
revolutionize the way we interact with computers, and they are
expected to play an increasingly significant role in our lives in the
coming years. Some examples of large language models include
(as of March 2024):
• GPT by OpenAI.
• Gemini by Google.
• Llama by Meta.

<a id="page-12"></a>

---

### [Page 12]

warming up
7
• Grok by xAI.
• Mistral by Mistral AI.
• Claude3 by Anthropic.
• and many others in development by companies such as
Amazon or Samsung.
Most of the examples in this book have been created using
ChatGPT v3.5 and v4, and in some cases, with Google Gemini
and Llama.
To get the most out of LLMs, we must learn how to access
them and ask for information and tasks in a concrete and specific
way. This is called prompt engineering.
How do I get access to an LLM
Getting started with an LLM is very simple, as there’s no need to
install anything. Just open an internet browser and access one of
the following websites:
• https://chat.openai.com/
• https://www.bing.com/ and then click on the Chat tab.
• https://gemini.google.com/
• https://www.llama2.ai/
It is true that in some LLMs, you may need to register or
simply log in with your Gmail or Facebook accounts. Some
LLMs are also available on other applications such as Skype
or on specific AI websites like https://huggingface.co/ and
https://replicate.com/.
ChatGPT
Once logged in ChatGPT (https://chat.openai.com), we need to
choose the version of the model we want to try. Currently, there
are two versions: GPT-3.5, which is open and free for everyone,
and GPT-4, available only for paid users (this may change in the
future). Figure 1.1 shows the interface of ChatGPT version 3.5:

<a id="page-13"></a>

---

### [Page 13]

8
chatgpt: learning prompt engineering with 100+ examples
Figure 1.1: ChatGPT Interface
1) Conversation history menu. ChatGPT stores previous
conversations, allowing you to access them whenever you
want. Conversation names can be modified to make them
easier to find.
2) Current conversation. This screen displays all the information
from the ongoing conversation. ChatGPT, like other LLMs,
is capable of remembering the recent prompts from each
conversation. However, be cautious, as it doesn’t have
an infinite ’memory,’ and it may lose the thread of the
conversation. The 3.5 version of ChatGPT (free version) doesn’t
have Internet access and only has knowledge of data up to
January 2022. Therefore, for ChatGPT v3.5, Queen Elizabeth II
is still alive, it is not aware of the conflict between Ukraine and
Russia, and it does not know that Lionel Messi has won the
Soccer World Cup.
3) Prompt input menu. This is where to write prompts.
4) Modify an old prompt. Be cautious, modifying an old prompt
automatically deletes the conversation that was below that
prompt.

<a id="page-14"></a>

---

### [Page 14]

warming up
9
5) Access to account settings.
Copilot
Copilot (previously Bing Chat) is the version of ChatGPT for
Microsoft’s search engine. You can go to https://www.bing.com/
chat, log in with a Microsoft account, and access the Chat menu.
Figure 1.2 shows the interface of Copilot:
Figure 1.2: Copilot Interface
1) Current conversation. This screen displays all the information
from the ongoing conversation.
2) Suggestions on how to continue the conversation.
3) Text input.
4) Including other files in prompts. For example, you can ask
questions about images.
5) Voice input. You can use your device’s microphone to
communicate with Copilot. Copilot automatically transcribes
your spoken words into text in the chat. In addition to
responding in textual format, it will also reply in voice format
if you have the volume activated.

<a id="page-15"></a>

---

### [Page 15]

10
chatgpt: learning prompt engineering with 100+ examples
Google Gemini
Gemini is Google’s LLM. It can be accessed through https://
gemini.google.com with your Google account. Figure 1.3 shows
its interface:
Figure 1.3: Google Gemini Interface
1) Conversation history menu. Similar to ChatGPT, Gemini stores
previous conversations, allowing you to access them whenever
you want.
2) Current conversation. This screen displays all the information
from the ongoing conversation. Gemini has Internet access and
uses Google for queries, meaning that Gemini is also aware
that Argentina won the last World Cup.
3) Prompt input menu. It allows you to attach an image, ask
questions about it, and use voice communication.
Llama
Llama is an open-source LLM developed by Meta (formerly
Facebook). It is designed for companies or individuals to install
a version of Llama on their infrastructure. However, it is possible
to try it online at (https://www.llama2.ai). You don’t need to log
in, and it allows you to select different versions of the model. Its
interface is shown in Figure 1.4.

<a id="page-16"></a>

---

### [Page 16]

warming up
11
Figure 1.4: Llama Interface
1) Current conversation. Displays information from the ongoing
conversation. The online accessible Llama chat does not have
Internet access, so it lacks current information. In fact, if asked
about today’s date, it responds with February 23, 2023.
2) Prompt input menu.
3) Attach file. Allows you to upload an image and ask questions
about it.
4) LLM configuration menu. Allows you to select different
versions of the model (7B, 13B, 70B, Llava 13B, Salmonn), as
well as configuration parameters that determine its behavior.
Perplexity
Accessible from the official website (https://www.perplexity.
ai/), Perplexity is an intelligent search engine that uses LLM
to return accurate results. It eliminates the barrier of having to
enter the websites to find the result as occurs with search engines
such as Google or Yahoo. In addition, it includes Copilot mode,
an assistant that interacts with the user to refine searches and
facilitate the process. It can also be set to only search certain
sources like YouTube or Reddit.

<a id="page-17"></a>

---

### [Page 17]

12
chatgpt: learning prompt engineering with 100+ examples
Figure 1.5: Perplexity Interface
1) Current conversation.
2) Sources of information
3) Prompt input menu
4) Attach files. Allows you to ask questions about different file
formats. For example, you can attach a PDF and ask it to
provide a summary.
HuggingFace and Replicate
HuggingFace and Replicate are not LLMs, but rather platforms
where models generated by the AI research community can be
uploaded for use by other people. In addition, they include the
option to display demos of the models so that people can try
them out. These demos are found in the so-called HuggingFace
Spaces (https://huggingface.co/spaces) or in the exploration
tab of Replicate (https://replicate.com/explore). Both

<a id="page-18"></a>

---

### [Page 18]

warming up
13
Replicate and HuggingFace are the ideal choice for testing new
models and exploring the latest AI advancements.
Alternative accesses
So far we have seen how to access different LLMs from the web.
However, this is not the only option. There are applications that
can be installed directly on the mobile or tablet, for example
the ChatGPT mobile application, the Bing application, Gemini,
Perplexity, etc.
Alternatively, LLMs have also been integrated into other
systems, for example you can access Bing Chat from a Skype
conversation.
Figure 1.6: Conversation with Bing Chat from Skype
Possibilities and uses
What can we do with an LLM? What can we ask an LLM? Well
the answer is everything (or almost everything). LLMs are very
good at working with text. Some researchers refer to LLMs "text

<a id="page-19"></a>

---

### [Page 19]

14
chatgpt: learning prompt engineering with 100+ examples
calculators" because they are capable of processing text efficiently
and quickly. Just as in a calculator we have functions to add,
subtract or multiply, we can ask an LLM for endless operations
for a text such as:
• Translate a text into another language. Example: can you
translate the following text into French? "The boy runs up
to his house to watch the game"
• Summarize a text in a few lines or paragraphs. Example: Can
you summarize the following news in 2-3 lines?
• Classify a text by sentiment. Example: Can you identify if the
customer who wrote this product review is satisfied with their
purchase or not?
• Response generation. Example: Can you write an email in
response to this customer, informing them that I will be
traveling next week?
• Style generation. Example: Can you rewrite this poem in
reggaeton song style?
As you will see from the following examples, LLMs are very
good at understanding text and transforming it at will. But their
skills do not stop there: LLMs can also handle data tables and
programming code, and recently they have also been able to
understand figures and images and incorporate them into the
analysis.
What is a prompt?
The prompt is the way we make queries to an LLM. Generally,
a prompt will be an instruction or initial text provided to the
LLM with which we want to guide and direct the generation of
responses or coherent text. It can be a phrase, a question, or even
a complete paragraph that sets the context or defines the task that
the LLM is expected to perform.
To fully exploit the potential of LLMs, we must learn to interact
and request information in the most suitable way possible. This
is called prompt engineering, that is, how to specify correctly in

<a id="page-20"></a>

---

### [Page 20]

warming up
15
the prompt what we want and how we want it. Hence, this book
discusses some techniques for interacting as effectively as possible
with LLMs through appropriate and precise prompts.
First prompts: movie recommendations
As many teachers say: ’You learn to program by programming.’
The more, the better.
The same goes for mastering prompts. You have to try many
prompts, run many tests, and make errors to learn and refine the
technique of accessing the LLM; that is, prompt engineering.
So, let’s open an LLM and get started with our first prompt:
we’re going to ask the LLM for a recommendation of five movies
to watch tonight.
Prompt 4
Could you recommend me 5 movies to watch tonight?
ChatGPT answers...
Great! Here’s a mix of different genres:
"Inception" (2010) - Directed by Christopher Nolan, this mind-bending
sci-fi thriller explores dreams within dreams, featuring a stellar cast led
by Leonardo DiCaprio.
"The Grand Budapest Hotel" (2014) - A whimsical and visually stunning
comedy directed by Wes Anderson, following the misadventures of a
hotel concierge framed for murder.
"The Shawshank Redemption" (1994) - This powerful drama, based on
a Stephen King novella, tells the story of hope and friendship in the
confines of a prison. It stars Tim Robbins and Morgan Freeman.
"Guardians of the Galaxy" (2014) - A fun and action-packed Marvel
superhero film that combines humor, great music, and a group of
unlikely heroes saving the galaxy.
"Eternal Sunshine of the Spotless Mind" (2004) - A unique romantic sci-fi
drama about a couple (played by Jim Carrey and Kate Winslet) who
undergo a procedure to erase each other from their memories.

<a id="page-21"></a>

---

### [Page 21]

16
chatgpt: learning prompt engineering with 100+ examples
These movies offer a diverse range of experiences, so hopefully, there’s
something that catches your interest!
As we see in this example, by not specifying any preferences,
ChatGPT has recommended five good movies of different genres.
If we want a more specific response, we must add some more
context to the prompt, for example:
Prompt 5
Could you recommend me 5 movies to watch tonight with
my girlfriend?
ChatGPT answers...
Absolutely! Here’s a mix of romantic, feel-good, and enjoyable movies
perfect for a cozy night in:
"La La Land" (2016) - A beautiful and romantic musical that follows
the love story between a jazz musician (Ryan Gosling) and an aspiring
actress (Emma Stone) in Los Angeles.
"About Time" (2013) - A heartwarming and charming film about love
and time travel, starring Domhnall Gleeson and Rachel McAdams.
"The Princess Bride" (1987) - A classic romantic comedy adventure
that has something for everyone—sword fights, romance, humor, and
quotable lines.
"Before Sunrise" (1995) - A dialogue-driven film following the chance
encounter and romantic connection between two strangers, played by
Ethan Hawke and Julie Delpy, as they spend a night exploring Vienna.
"Crazy, Stupid, Love" (2011) - A delightful romantic comedy-drama with
a star-studded cast including Steve Carell, Ryan Gosling, Emma Stone,
and Julianne Moore, exploring various aspects of love and relationships.
These movies offer a mix of romance, comedy, and heartfelt moments,
perfect for a cozy movie night with your girlfriend!
With this new prompt, we have added a bit more context by
specifying that we will watch the movie with our girlfriend,

<a id="page-22"></a>

---

### [Page 22]

warming up
17
suggesting to ChatGPT that a romantic comedy might be a good
fit for us. We can fine-tune the recommendation even further with
the following prompt:
Prompt 6
I like the suggestions, but could you recommend some
more movies with Hugh Grant as the main character and
with a happy ending?
ChatGPT answers...
Absolutely! Hugh Grant has starred in several charming romantic
comedies with happy endings. Here are some movies where he plays
the main character and the story concludes on a positive note:
"Notting Hill" (1999) - Grant plays a bookstore owner who falls in love
with a famous actress (Julia Roberts) in this endearing romantic comedy
set in London.
"Four Weddings and a Funeral" (1994) - A romantic comedy about a
man (Grant) who keeps encountering the same woman at different social
events, leading to various romantic entanglements.
"Love Actually" (2003) - In this ensemble romantic comedy, Grant
portrays the British Prime Minister dealing with matters of the heart
amidst multiple interconnected love stories during the Christmas season.
"Music and Lyrics" (2007) - Grant stars as a washed-up ’80s pop star
who teams up with a quirky woman (Drew Barrymore) to write a song,
leading to unexpected romance.
"Two Weeks Notice" (2002) - A romantic comedy where Grant plays a
wealthy businessman who hires a passionate lawyer (Sandra Bullock)
as his legal counsel, leading to a quirky and romantic professional
relationship.
Each of these films features Hugh Grant in charismatic and romantic
roles, with happy endings that will leave you with a smile!
Now we’ve got the result we wanted. It took us three
iterations, but the recommendations are satisfactory.
In general, the more context we add to the prompt, the easier

<a id="page-23"></a>

---

### [Page 23]

18
chatgpt: learning prompt engineering with 100+ examples
it will be for the LLM to come up with a response closer to your
needs.
With very concise prompts, LLM responses tend to be very
generic and imprecise. The more details we incorporate into the
prompt, the more likely we are to get better results.
First prompts: training plans
In the following example, we’re going to try prompts with
increasing context to refine a personalized physical training plan
at a gym. You’ll notice significant differences as you add more
and more context to the prompts.
Prompt 7
Can you recommend me a physical training plan for the
gym this afternoon?
ChatGPT answers...
Certainly! A well-rounded gym workout typically includes a mix of
cardio, strength training, and flexibility exercises. Here’s a sample plan
you might find helpful:
Warm-Up (5-10 minutes):
Start with 5-10 minutes of light cardio such as jogging, cycling, or using
the elliptical machine to get your heart rate up and warm up your
muscles. Strength Training (40-45 minutes):
Chest: Bench press, dumbbell flyes, push-ups
Back: Pull-ups, bent-over rows, lat pulldowns
Legs: Squats, lunges, leg press, calf raises
Shoulders: Shoulder press, lateral raises, front raises Arms: Bicep curls,
tricep dips, skull crushers
Perform 3-4 sets of 8-12 reps for each exercise, resting for about 60-90
seconds between sets.
Cardio (15-20 minutes):

<a id="page-24"></a>

---

### [Page 24]

warming up
19
Incorporate another round of cardio to keep your heart rate up. You
can choose from running on the treadmill, cycling, or using the rowing
machine. Aim for 15-20 minutes at a moderate to high intensity.
Cool Down (5-10 minutes):
Stretching: Spend 5-10 minutes stretching major muscle groups like your
hamstrings, quadriceps, calves, chest, back, and shoulders. Hold each
stretch for 15-30 seconds without bouncing.
Remember, it’s crucial to adjust the weights and intensity according
to your fitness level and comfort. Stay hydrated throughout the
workout and listen to your body. If you’re new to any exercise, consider
seeking guidance from a fitness professional to ensure proper form and
technique.
As we can see, the training plan is quite comprehensive but
very generic, with different exercises for various muscle groups.
Perhaps it would be a good workout plan for the general public.
Let’s try to personalize it to our needs with a more specific
prompt, with more context.
Prompt 8
Can you recommend me a physical training plan for
the gym this afternoon? I only have 45 minutes and I’m
interested in working muscle groups to reduce back pain.
ChatGPT answers...
Absolutely! Given your focus on alleviating back pain, here’s a
time-efficient workout targeting muscle groups that can help strengthen
and support your back:
Warm-Up (5 minutes):
Start with light cardio to warm up your muscles and get your blood
flowing. You could walk briskly on the treadmill, use the stationary bike,
or do some light dynamic stretching.
Strength Training (30 minutes):
Core Exercises (15 minutes):

<a id="page-25"></a>

---

### [Page 25]

20
chatgpt: learning prompt engineering with 100+ examples
Planks: Hold for 30-60 seconds, aiming for 3 sets.
Bird Dogs: Perform 10-12 reps on each side for 3 sets.
Deadbugs: Complete 10-12 reps for 3 sets.
Back Exercises (15 minutes):
Superman Exercise: Lie face down and raise your arms and legs
simultaneously, holding for a few seconds. Aim for 3 sets of 12-15 reps.
Lat Pulldowns or Seated Rows: Use resistance machines or bands to
target your upper back. Perform 3 sets of 8-12 reps.
Cool Down (5 minutes):
Finish with gentle stretching targeting your back, hamstrings, and hips.
Hold each stretch for 20-30 seconds without bouncing.
Remember, the aim is to strengthen the core muscles (abdominals,
obliques, lower back) and the muscles surrounding your spine to
provide better support and alleviate back pain. Focus on maintaining
proper form throughout the exercises, and if any movement causes
discomfort, stop immediately.
As we can see, the LLM has reduced the number of exercises
due to time constraints and focused on specific exercises for my
back pain.
Finally, let’s add a bit more context about our physical
characteristics so that the LLM incorporates it into its logic and
adapts the training plan to a specific individual.
Prompt 9
Can you recommend me a physical training plan for
the gym this afternoon? I only have 45 minutes and I’m
interested in working muscle groups to reduce back pain.
I’m a 60-year-old woman, 1.60 meters tall, and weight 55
kilograms.

<a id="page-26"></a>

---

### [Page 26]

warming up
21
ChatGPT answers...
Of course! Considering your focus on reducing back pain and your
specific profile, here’s a tailored workout plan that’s gentle yet effective:
Warm-Up (5 minutes):
Start with light cardio to warm up your muscles and increase blood flow.
Walking on the treadmill or using the elliptical machine at a moderate
pace for 5 minutes should suffice. Strength Training (30 minutes):
Core Exercises (15 minutes):
Modified Planks: Perform a plank on your knees instead of toes, holding
for 20-30 seconds. Aim for 2-3 sets. Seated Russian Twists: Sit on the
floor, knees bent, and twist gently from side to side while holding a light
weight or a medicine ball. Aim for 2-3 sets of 10-12 reps on each side.
Pelvic Tilts: Lie on your back with knees bent, gently lift your pelvis,
and hold for a few seconds before lowering back down. Perform 2-3 sets
of 12-15 reps. Back Exercises (15 minutes):
Back Extensions: Use a back extension machine if available, or perform
Superman exercises as described earlier. Aim for 2-3 sets of 10-12
reps. Seated Rows: Use a resistance machine or bands to target the
upper back. Perform 2-3 sets of 8-10 reps, focusing on proper form and
controlled movements. Cool Down (5 minutes):
Finish with gentle stretching targeting your back, hamstrings, and hips.
Hold each stretch for 20-30 seconds without bouncing. It’s important
to prioritize proper form over the amount of weight or intensity. Start
with lighter resistance and gradually increase as you become more
comfortable and confident with the exercises.
Additionally, if you experience any pain or discomfort during the
workout, stop immediately and consult with a fitness professional
or healthcare provider. Consistency with these exercises, along with
maintaining good posture throughout the day, can greatly assist in
reducing back pain over time.
Now the LLM has created a new training plan with gentler
exercises suitable for the age, gender, and weight conditions of
our athlete. Remeber that providing precise and specific context is
crucial for obtaining good results.

<a id="page-27"></a>

---

### [Page 27]

22
chatgpt: learning prompt engineering with 100+ examples
Although ChatGPT is one of the most advanced language
model and is often a good choice, it is a good idea to try other
LLMs from time to time. These other models may operate
differently or have additional features that make them more
suitable for certain tasks. Let’s try the same gym task we did
before with other LLMs to see how they differ.
Prompt 10
Can you recommend me a physical training plan for the
gym this afternoon? I would like to go around 1 hour, 3
days a week.
ChatGPT answers...
Absolutely! A well-rounded gym workout can be accomplished within
an hour, three days a week. Here’s a balanced plan that covers various
muscle groups:
Day 1: Full Body Workout
Warm-Up (5 minutes): Start with light cardio (jogging, cycling, or using
the elliptical) to get your heart rate up.
Strength Training (40 minutes):
Squats: 3 sets of 8-12 reps Push-Ups or Chest Press: 3 sets of 8-12 reps
Bent-Over Rows or Lat Pulldowns: 3 sets of 8-12 reps
Shoulder Press or Dumbbell Shoulder Press: 3 sets of 8-12 reps
Planks: Hold for 30-60 seconds, aiming for 3 sets.
Cardio (10 minutes): Finish with 10 minutes of moderate-intensity cardio
(running, cycling, or using the rowing machine).
Cool Down and Stretching (5 minutes): Spend a few minutes stretching
major muscle groups to aid in recovery.
Day 2: Cardio and Core Focus
Warm-Up (5 minutes): Start with light cardio, similar to Day 1.
Cardio (30 minutes): Engage in a continuous 30-minute cardio session
at a moderate intensity. Choose your preferred machine or activity
(treadmill, cycling, rowing, etc.).

<a id="page-28"></a>

---

### [Page 28]

warming up
23
Core Exercises (20 minutes): Planks: 3 sets, aiming for 30-60 seconds
each.
Russian Twists: 3 sets of 12-15 reps on each side.
Leg Raises or Bicycle Crunches: 3 sets of 12-15 reps.
Day 3: Upper Body Focus
Warm-Up (5 minutes): Similar to previous days, start with light cardio.
Strength Training - Upper Body (40 minutes):
Bench Press or Push-Ups: 3 sets of 8-12 reps
Pull-Ups or Lat Pulldowns: 3 sets of 8-12 reps
Shoulder Press or Lateral Raises: 3 sets of 8-12 reps
Bicep Curls or Hammer Curls: 3 sets of 8-12 reps
Tricep Dips or Tricep Extensions: 3 sets of 8-12 reps
Cardio (10 minutes): Finish with 10 minutes of cardio at a moderate
intensity.
Cool Down and Stretching (5 minutes): Don’t skip the stretching to aid
in muscle recovery and flexibility.
Remember to adjust weights and exercises based on your fitness level
and comfort. Rest for about 60-90 seconds between sets, and focus
on maintaining proper form throughout the workout. This routine
targets different muscle groups across the three days and provides a
good balance between strength training, cardio, and core work.
Gemini answers...
Here’s a sample 3-day full-body workout routine that you can do at the
gym for 1 hour each session:
Day 1: Push
Barbell bench press: 3 sets of 8-12 reps
Overhead press: 3 sets of 8-12 reps
Triceps pushdowns: 3 sets of 10-15 reps

<a id="page-29"></a>

---

### [Page 29]

24
chatgpt: learning prompt engineering with 100+ examples
Lateral raises: 3 sets of 10-15 reps
Plank: 3 sets of 30-60 seconds
Day 2: Pull
Pull-ups: 3 sets of as many reps as possible
Barbell rows: 3 sets of 8-12 reps
Bicep curls: 3 sets of 10-15 reps
Face pulls: 3 sets of 10-15 reps
Hanging leg raises: 3 sets of 15-25 reps
Day 3: Legs
Barbell squats: 3 sets of 8-12 reps
Leg press: 3 sets of 10-15 reps
Hamstring curls: 3 sets of 10-15 reps
Calf raises: 3 sets of 15-25 reps
Glute bridges: 3 sets of 15-25 reps
Rest:
Take at least 1 day of rest between each workout. This will allow your
muscles to recover and grow.
Warm-up and cool-down:
Always warm up before your workout with 5-10 minutes of light cardio
and dynamic stretching. This will prepare your muscles for activity
and reduce your risk of injury. Cool down after your workout with
5-10 minutes of static stretching. This will help your muscles relax and
recover.
Progression:
As you get stronger, you can gradually increase the weight you are
lifting or the number of reps you are doing. You can also try adding
more sets to your workouts.
Nutrition:

<a id="page-30"></a>

---

### [Page 30]

warming up
25
Make sure you are eating a healthy diet that includes plenty of protein.
Protein is essential for muscle growth and repair. You may also want to
consider taking a protein supplement.
Consistency is key:
The most important thing is to be consistent with your workouts. Aim
to go to the gym 3 days a week, even if you can only do 30 minutes each
session. Over time, you will see results.
Listen to your body:
If you are feeling pain, stop the exercise and rest. Don’t push yourself
too hard, especially if you are new to exercise.
Have fun:
Exercise should be enjoyable. Find activities that you find fun and
challenging. This will help you stick with it in the long run.
Llama answers...
Of course! Here’s a physical workout plan for the gym that you can
follow 3 days a week for an hour each session:
Day 1: Strength Training
Warm-up: 5 minutes on the stationary bike or treadmill at a moderate
pace
Leg lifts: 3 sets of 12 repetitions with moderate weight
Bench press: 3 sets of 12 repetitions with moderate weight
Barbell row: 3 sets of 12 repetitions with moderate weight
Abdominal exercises: 3 sets of 12 repetitions
Stretching: 5 minutes
Day 2: Endurance Training
Warm-up: 5 minutes on the stationary bike or treadmill at a moderate
pace
Continuous running: 30 minutes on the treadmill at a moderate intensity
Stretching: 5 minutes

<a id="page-31"></a>

---

### [Page 31]

26
chatgpt: learning prompt engineering with 100+ examples
Day 3: Strength and Endurance Training
Warm-up: 5 minutes on the stationary bike or treadmill at a moderate
pace
Leg lifts: 3 sets of 12 repetitions with moderate weight
Bench press: 3 sets of 12 repetitions with moderate weight
Barbell row: 3 sets of 12 repetitions with moderate weight
Continuous running: 20 minutes on the treadmill at a moderate intensity
Abdominal exercises: 3 sets of 12 repetitions
Stretching: 5 minutes
Remember, it’s important to progressively increase weight and intensity
as you become accustomed to the workout. Also, listen to your body and
ensure adequate rest between sessions. Enjoy your workout!
In this case, all three models perform well and provide
different but useful responses. Each one explains things in its
own way. We recommend trying the examples from the book on
different models to see how the responses vary.
Finally, one more example for creating diet plans:
Prompt 11
Consider you are a nutrition assistant. I need to lose 5
kilos. Can you prepare a diet for one week? I cannot eat
fish due to alergic reactions. I am 45 years old and my
height is 180 cm and weight is 90 kilos
ChatGPT answers...
Creating a personalized diet plan requires considering several factors,
including your overall health, activity level, dietary preferences beyond
allergies (like vegetarianism or veganism), and specific nutritional needs.
However, I can provide you with a general one-week diet plan aimed
at weight loss, focusing on balanced nutrition and calorie control.
Please adjust portion sizes according to your hunger cues and consult
a healthcare provider or a dietitian for a plan tailored specifically to your

<a id="page-32"></a>

---

### [Page 32]

warming up
27
needs.
General Guidelines:
- Aim for a moderate calorie deficit. Losing weight too fast can be
unhealthy and unsustainable. A deficit of 500 to 750 calories per day
is often recommended for healthy and gradual weight loss, leading to
about 0.5 to 1 kg of weight loss per week.
- Incorporate a variety of fruits, vegetables, whole grains, lean proteins
(other than fish), and healthy fats into your meals.
- Drink plenty of water throughout the day, and limit sugary drinks and
alcohol.
- Adjust portion sizes as needed based on your satiety and hunger levels.
Sample One-Week Diet Plan
Day 1:
- Breakfast: Oatmeal made with skim milk, topped with sliced almonds
and berries.
- Lunch: Grilled chicken salad with mixed greens, cherry tomatoes,
cucumbers, and a vinaigrette dressing.
- Dinner: Lentil soup with a side of whole-grain bread and a mixed
greens salad.
- Snacks: Greek yogurt; carrot and cucumber sticks with hummus.
Day 2:
- Breakfast: Greek yogurt with sliced fruits and a sprinkle of chia seeds.
- Lunch: Turkey and avocado wrap with whole-grain tortilla, mixed
greens, and tomato.
- Dinner: Stir-fried tofu with broccoli, bell peppers, and quinoa.
- Snacks: A small handful of nuts; an apple.
Day 3:
- Breakfast: Scrambled eggs with spinach, tomatoes, and feta cheese.
- Lunch: Quinoa salad with black beans, corn, avocado, and lime
dressing.

<a id="page-33"></a>

---

### [Page 33]

28
chatgpt: learning prompt engineering with 100+ examples
- Dinner: Chicken breast baked with herbs, served with steamed green
beans and sweet potato.
- Snacks: Cottage cheese with pineapple; raw vegetables with tzatziki
sauce.
Day 4:
- Breakfast: Smoothie with banana, spinach, protein powder, and almond
milk.
- Lunch: Lentil and vegetable stew with a side of whole-grain bread.
- Dinner: Grilled lean pork chops with a side of roasted Brussels sprouts
and apples.
- Snacks: An orange; mixed nuts.
Day 5:
- Breakfast: Whole-grain toast with avocado and poached eggs.
- Lunch: Chicken Caesar salad (without croutons, with a light dressing).
- Dinner: Zucchini noodles (zoodles) with tomato sauce and grilled
chicken.
- Snacks: Berries; a small piece of dark chocolate.
Day 6:
- Breakfast: Cottage cheese with fresh peaches and a drizzle of honey.
- Lunch: Turkey breast slices with sweet potato mash and steamed
broccoli.
- Dinner: Eggplant lasagna with a side salad.
- Snacks: Greek yogurt; a pear.
Day 7:
- Breakfast: Pancakes made with almond flour, topped with a berry
compote.
- Lunch: Beef stir-fry with a variety of vegetables and brown rice.
- Dinner: Grilled chicken skewers with mixed bell peppers and a quinoa
salad.

<a id="page-34"></a>

---

### [Page 34]

warming up
29
- Snacks: An apple with almond butter; raw vegetables with guacamole.
Note:
- Ensure each meal contains protein, fiber, and healthy fats to maintain
satiety.
- Adjust the portion sizes and overall calorie intake according to your
specific energy needs, activity level, and weight loss goals.
- It’s crucial to consult with a nutritionist or dietitian to create a
plan that’s specifically tailored to your individual health profile and
nutritional needs.
Summary and exercises
Now it’s time to access your favorite LLM (ChatGPT, Gemini,
Llama, etc.) and start playing around with and testing some
prompts. Below, we provide you with some examples to practice:
1) Think of a prompt to request adventure books with simple
language for a 6-year-old who is starting to read.
2) Request a YouTube channel with music to relax while you
study.
3) Ask for recommendations on five YouTube channels with
educational and informative videos for children, focusing on
science and engineering.
4) Ask for a recipe to cook tonight. Your guests are vegetarians.
The recipe should include the following ingredients: milk,
cheese, legumes, and tomatoes.
5) Ask for an explanation of how the French mortgage loan
system works, and also request an explanation of the Excel
functions for simulating the amortization period of a mortgage.
Explain that you’re looking to apply for a mortgage of 200,000
euros, your monthly income is 2500 euros, and the interest rate
is 4%. Inquire about the monthly installment for a term of 20
years.

<a id="page-35"></a>

---

### [Page 35]

30
chatgpt: learning prompt engineering with 100+ examples
6) Ask ChatGPT, Gemini, and Llama for several of the proposed
examples and analyze the differences between their responses.
Remember to correctly specify the problem you want to solve
and the starting parameters and hypotheses. Normally it will take
you 2 or 3 attempts to get the right prompt. With trial and error,
you will fine-tune the prompt to achieve the expected results.

<a id="page-36"></a>

---

### [Page 36]

Some basic techniques
Simple prompts to obtain information
W
e have already seen in the previous chapter some prompts
with different objectives, uses and utilities. In this chapter,
we are going to study simple techniques to obtain information
in a very similar way as we would do it from an Internet search
engine. This type of simple and minimal prompts is often called
“Zero-Shot Prompt”, for example:
Zero-shot
Prompting
• What is cancer?
• How many types of stars are there?
• How old is the Universe?
• How can I cook a cake?
• In what year was Miguel de Cervantes born?
• How many cities called Madrid are there in the world?
On this simple prompt, we can add instructions for the LLM
to provide its answer in a certain way, for example, following a
particular style or adopting a certain format for its presentation or
just simplifying it for better understanding. This is the first major
difference between LLMs and a classic Internet search engine.
In the following prompt, we ask an LLM for information about
a topic without any restrictions or guidelines, so that the LLM is
free to answer as it deems appropriate.

<a id="page-37"></a>

---

### [Page 37]

32
chatgpt: learning prompt engineering with 100+ examples
Prompt 12
What is cancer?
ChatGPT answers...
Cancer is a broad term for a large group of diseases characterized by
the uncontrolled growth and spread of abnormal cells in the body.
Normally, human cells grow and divide to form new cells as the body
needs them. When cells grow old or become damaged, they die, and
new cells take their place. However, this orderly process can break down
in the case of cancer.
Key characteristics of cancer include:
1. Uncontrolled Growth: Cancer cells grow and divide at an unchecked
pace, leading to the formation of masses of tissue called tumors. Not all
cancers form tumors (for example, leukemia does not).
2. Invasion and Metastasis: Cancer cells can invade nearby tissues
and can spread to other parts of the body through the bloodstream
and lymphatic system. This spread, called metastasis, is a key feature
distinguishing cancer from benign tumors.
3. Genetic Mutations: Changes in the DNA within cells often drive
the uncontrolled growth of cancer cells. These genetic changes can be
inherited, occur by chance, or result from exposure to environmental
factors like tobacco smoke, radiation, certain chemicals, and infectious
agents.
4. Diverse Types: There are many types of cancer, each named for the
type of cell or organ in which it starts. Examples include breast cancer,
lung cancer, and skin cancer.
5. Varied Treatments: Treatment options for cancer include surgery,
chemotherapy, radiation therapy, immunotherapy, and targeted therapy.
The choice of treatment depends on the type and stage of cancer, as well
as the patient’s overall health.
Cancer’s complexity and diversity make it a challenging disease to
understand and treat. Research is ongoing to find better ways to prevent,
diagnose, and treat cancer.

<a id="page-38"></a>

---

### [Page 38]

some basic techniques
33
Perhaps this prompt is the simplest of all and any Internet
search engine such as Google would have returned some web
pages that define cancer in a similar way, for example Wikipedia
or the World Health Organization. Perhaps the most obvious
advantage of the LLM over the search engine is its ability to
structure the information and present it in a simpler and more
readable way.
Summarizing and structuring information
When a response is too long, we can add instructions to our
prompt requesting to reduce or summarize the result, for
Prompt
= Task +
Output
Structure
example:
Prompt 13
What is cancer? Give me a one-paragraph summary.
ChatGPT answers...
Cancer is a broad term for a large group of diseases characterized
by the uncontrolled growth and spread of abnormal cells. When the
body’s normal control mechanism stops working, old or damaged
cells survive when they should die, and new cells form when they are
not needed, forming a mass of tissue known as a tumor. These can be
benign (non-cancerous) or malignant (cancerous). Malignant tumors can
invade nearby tissues and spread to other parts of the body, a process
called metastasis. The exact cause of cancer is a complex interplay of
genetic, environmental, and lifestyle factors, making it a leading cause
of death worldwide. Treatment options vary widely and can include
surgery, radiation, chemotherapy, immunotherapy, and targeted therapy,
depending on the type, location, and stage of the cancer.
Furthermore, we can also expand the information by asking the
LLM for more content and providing a document structure that
the LLM should follow. For example:

<a id="page-39"></a>

---

### [Page 39]

34
chatgpt: learning prompt engineering with 100+ examples
Prompt 14
Write a 2000 word essay about cancer. I need you to
structure the information as follows: first an introduction
explaining what cancer is. Then a section on the most
common types of cancer in men and women. Next, explain
the most common treatments to fight cancer. Finally, write
a conclusion in a single paragraph.
ChatGPT answers...
Cancer: Understanding the Disease, Its Common Forms, and Treatment
Modalities
Introduction
Cancer encompasses a myriad of diseases characterized by the abnormal
growth and proliferation of cells within the body. Under normal
circumstances, cellular growth is a meticulously regulated process,
ensuring that cell division occurs only as necessary. However, when
these regulatory mechanisms fail, it leads to the uncontrolled division of
cells, leading to the formation of tumors. These tumors can be benign,
meaning they do not invade nearby tissues or spread to other parts of
the body, or malignant, which are cancerous and can metastasize to
distant organs. The genesis of cancer involves a complex interplay of
genetic, environmental, and lifestyle factors, contributing to its status
as a leading cause of morbidity and mortality globally. The disease’s
multifaceted nature demands a comprehensive understanding of its
types, treatment modalities, and impact on society.
Most Common Types of Cancer in Men and Women
In men, the most prevalent types of cancer are prostate, lung, and
colorectal cancer. Prostate cancer, specifically, has a significant incidence
rate, affecting a large proportion of men worldwide. It originates in the
prostate gland and can grow slowly or aggressively, impacting a man’s
urinary and sexual functions. Lung cancer, attributed mainly to smoking
and exposure to carcinogens, stands as one of the deadliest cancers
due to its aggressive nature and late-stage diagnosis. Colorectal cancer,
affecting the colon or rectum, highlights the importance of dietary and
lifestyle factors in cancer development.

<a id="page-40"></a>

---

### [Page 40]

some basic techniques
35
For women, breast, lung, and colorectal cancers are the most common.
Breast cancer, leading the list, is characterized by the growth of
malignant cells in the breast tissue, significantly influenced by hormonal,
genetic, and lifestyle factors. Like men, women are also susceptible to
lung and colorectal cancers, with lung cancer’s lethality underscored by
its late diagnosis and aggressive progression. Colorectal cancer shares
risk factors with its incidence in men, including diet, age, and genetic
predisposition.
Common Treatments to Fight Cancer
The battle against cancer involves a variety of treatment strategies,
often employed in combination to maximize efficacy. Surgery, one
of the oldest methods, aims to remove the tumor and a margin of
healthy tissue around it, crucial for localised cancers. Radiation therapy
uses high-energy particles or waves, such as X-rays, to destroy or
damage cancer cells, effective in both curative and palliative settings.
Chemotherapy, involving the use of drugs to kill cancer cells, is a
systemic treatment that can affect the entire body, useful for cancers
that have metastasized.
Innovations in cancer treatment have led to the development of targeted
therapy and immunotherapy. Targeted therapy drugs specifically
attack cancer cells’ unique markers, sparing most normal cells and
reducing side effects. Immunotherapy, on the other hand, empowers
the body’s immune system to recognize and destroy cancer cells more
effectively. These treatments, often used in conjunction with traditional
methods, represent the forefront of cancer therapy, offering new hope for
improved outcomes.
Conclusion
Cancer, with its myriad forms and complexities, remains a significant
challenge in the realm of global health. Understanding its common
types in men and women, alongside the advancements in treatment
modalities, is paramount for effective management and care. The
continuous research and development in the field promise a future
where cancer can be detected earlier, treated more efficiently, and
perhaps, eventually cured. This underscores the importance of sustained
effort in cancer research, prevention, and education to mitigate the

<a id="page-41"></a>

---

### [Page 41]

36
chatgpt: learning prompt engineering with 100+ examples
impact of this multifaceted disease on individuals and societies
worldwide.
In these examples, we have seen how to modify the output
of the language model by requesting more or less information,
with varying levels of detail, and even guiding how we want the
structured information to be presented. Next, we will explore
how language models can generate different styles of text in the
output.
Generating artistic text
In addition to requesting textual information from ChatGPT, we
can ask it to adopt different roles and artistic styles to write its
responses in the most diverse ways possible. Below are some
examples with ideas for various artistic styles:
Prompt 15
Explains how a star is born for a primary school child.
ChatGPT answers...
Imagine the universe is a big, dark room and stars are special glowing
balloons that light it up. Now, let’s think about how one of these
glowing balloons – a star – is born!
In this dark room, there are some places where tiny bits of dust and
gas are floating around, kind of like the fluffy stuffing inside a teddy
bear. These bits and pieces are very, very cold and they really like to
stick together. So, over a long, long time, they start to cuddle up closer,
making a big, fluffy cloud. This cloud is called a nebula.
Now, imagine if more and more stuffing keeps piling up in one spot. It
starts to get heavy, right? In the nebula, as more gas and dust pile up, it
gets heavier and starts to pull even more stuffing towards it, because of
gravity – that’s the thing that keeps us from floating off the ground!
As the center of this big cloud gets more stuffed and heavy, it also starts
to get warm, like how it feels warm when you’re snuggled under a
blanket. This warm center is where a baby star, or a protostar, starts to

<a id="page-42"></a>

---

### [Page 42]

some basic techniques
37
form. It’s not glowing yet, but it’s getting ready!
The protostar gets warmer and warmer as it pulls in more gas and dust,
squeezing it tight. Imagine hugging your teddy bear so tightly that it
starts to feel warm! When the center of the protostar gets hot enough,
it’s like flipping a switch that turns on a light bulb. The star starts to
shine because it begins a process called nuclear fusion – this is where it
really starts to glow, just like our Sun!
Nuclear fusion is like a magical power that stars have, which allows
them to shine bright and give off light and warmth. It happens when the
star’s heart squeezes hydrogen atoms so hard that they stick together to
make helium, and this sticking together releases a lot of energy, making
the star glow.
And that, my friend, is how a star is born! It starts as a tiny speck in a
fluffy cloud and grows up to be a glowing balloon that lights up our big,
dark room, the universe. Isn’t that amazing?
We can request a poetic style:
Prompt
= Task +
Writing Style
Prompt 16
Explains how a baby is born in poetic style
ChatGPT answers...
In a world spun from whispers and wonder, beneath the canvas of skies
yonder, lies a tale as old as time, of how a new soul begins its rhyme.
In a garden of flesh and bone, a seed of love is gently sown. Warmed by
a mother’s inner glow, in a secret place only she can know. It takes root
in a cradle soft and deep, where angels tread and dreams may sleep.
As seasons change and moons do wane, the seed within begins its gain.
It weaves itself from tear and laugh, a miracle in its own half. With every
beat of two hearts in tune, it grows beneath the watchful moon.
This tiny voyager from stars afar, charts its course by an internal star.
It dances in the liquid light, growing stronger with each day and
night. Until the moment arrives, at last, when the gates of wonder are
unsurpassed.

<a id="page-43"></a>

---

### [Page 43]

38
chatgpt: learning prompt engineering with 100+ examples
A journey through a passage tight, into a world of air and light. With a
cry that splits the silent veil, a new life’s ship sets sail. Born of love and
dreams made real, a testament to hope’s undying zeal.
In this poetic dance of life and breath, a baby’s born, defying death. A
story of love’s enduring might, from the quiet dark into the bright. Thus
begins another tale, under the watchful stars so pale.
So marvel at this cycle spun, of life reborn, of life begun. For in each
birth, both great and small, the miracle of life enthralls us all.
Also we can ask for answers with rap-song style:
Prompt 17
Explain what the end of the world would be like if a
meteorite fell to Earth using rap song style.
ChatGPT answers...
(Verse 1)
Yo, listen up, I got a story to tell,
About a rock from the sky, and it fell like hell.
Cruisin’ through space, with a fiery tail,
A meteorite on a catastrophic trail.
It breaches the atmosphere, a streak of light,
A sight so bright, it turns night into daylight.
The impact’s near, no time for fright,
Brace yourselves for an explosive plight.
(Chorus)
Boom, bang, the world shakes,
A crater forms, the Earth quakes.
Dust clouds rise, the day turns to night,
A global winter, none spared from the plight.

<a id="page-44"></a>

---

### [Page 44]

some basic techniques
39
(Verse 2)
Tsunamis wave from the oceans wide,
Forests burn, can’t hide, can’t slide.
Cities crumble, mountains shake,
This ain’t no fake, make no mistake.
Survival’s a game, but the rules have changed,
With the world rearranged, it’s all deranged.
The climate swings, from hot to cold,
A story of the end, age-old, yet bold.
(Chorus)
Boom, bang, the world shakes,
A crater forms, the Earth quakes.
Dust clouds rise, the day turns to night,
A global winter, none spared from the plight.
(Bridge)
In the aftermath, silence reigns,
Survivors emerge, amidst the pains.
A new beginning, on scarred terrain,
Life persists, it’s nature’s refrain.
(Outro)
So remember this tale, of a meteor’s flight,
And the night it turned our day into night.
The end of the world, a fearsome sight,
But from the ashes, we rise, into the light.
You can also ask for jokes in the style of our favorite comedian:

<a id="page-45"></a>

---

### [Page 45]

40
chatgpt: learning prompt engineering with 100+ examples
Prompt 18
Tell me a joke on death with Monty Python’s style
ChatGPT answers...
Why did the Grim Reaper go to the comedy club? Because he heard
the jokes were to die for, and he was looking for something absolutely
killing to add to his "dead-pan" repertoire. Upon arriving, he said, "I’m
just here for the boos."
Also you can ask for historical passages in the style of our
favorite writer:
Prompt 19
Please explain how Christopher Columbus arrived in
America as if JRR Tolkien had written it.
ChatGPT answers...
In the waning years of the Middle Ages, under the auspices of the
Spanish crown, there embarked from the shores of Palos a mariner of
Genoese blood, Christopher Columbus by name. He, driven by the
unyielding desire to discover a passage westward to the fabled lands
of the East, sought the blessing of Queen Isabella and King Ferdinand,
sovereigns of the realms of Castile and Aragon, united under the banner
of what would become known as Spain.
With three ships, the Niña, the Pinta, and the Santa María, stout vessels
all, bearing men of courage and fortitude, Columbus set sail into the
vast, uncharted waters, guided by the stars and a heart full of hope. This
fellowship of mariners, akin to the companions of old who sought the
Undying Lands, braved the tempestuous wrath of the Ocean Sea, its
depths unfathomable, its mysteries veiled in shadow and foam.
Many a day and night did they journey, far beyond the sight of land,
into realms where no Western man had ventured. The crew, beset by
doubt and fear, murmured of mutiny, for the vastness of the sea seemed
endless, a perpetual twilight of water. But Columbus, steadfast in his
quest, spoke to them of valor and the glory of discovery, quelling the

<a id="page-46"></a>

---

### [Page 46]

some basic techniques
41
rising storm in their hearts as he navigated the tempests without.
At long last, when hope seemed but a flicker in the dark, the lookout’s
cry pierced the dawn: "Land, land!" A new world lay before them, not
the Indies they sought, but a land untouched, teeming with verdant
forests, majestic mountains, and rivers that wove through the landscape
like threads of silver. They had come upon the shores of what would
come to be known, in ages hence, as the Americas.
Columbus, like an explorer of Middle-earth, set foot upon this
unknown land, claiming it for Spain and the glory of Christendom.
Yet, unbeknownst to him, his journey would herald the beginning of
an age of conquest and discovery, a turning point in history that would
weave the fates of continents and peoples together in a tapestry rich and
complex.
Thus did Christopher Columbus, in his quest for the East, stumble upon
a New World, a discovery that would forever alter the course of history,
much as the unexpected journeys in the tales of old, where the path less
trodden leads to doors unlooked-for and destinies unforeseen.
Continuing with other authors like J.R.R. Tolkien, we can also
request the rewriting of text from other writers in new styles:
Prompt 20
Write the first paragraph of the book Don Quixote by
Miguel de Cervantes. Then, assume the role of JRR Tolkien
and rewrite the same paragraph in Tolkien’s style.
ChatGPT answers...
The first paragraph of "Don Quixote" by Miguel de Cervantes goes
something like this:
"In a village of La Mancha, the name of which I have no desire to call
to mind, there lived not long since one of those gentlemen that keep a
lance in the lance-rack, an old buckler, a lean hack, and a greyhound
for coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

<a id="page-47"></a>

---

### [Page 47]

42
chatgpt: learning prompt engineering with 100+ examples
Now, let’s venture into Middle-earth, channeling J.R.R. Tolkien’s style to
reimagine this opening:
"In a corner of the Shire, the name of which remains veiled in the mists
of memory, there dwelt, not long past, one of those hobbits of olden
lineage. He kept a polished lance by his door, a shield of ancient make
hung upon the wall, a steed of modest stature in the stable, and a hound
swift of foot for the chase. His table was graced with a stew more often
beef than mutton, greens upon most evenings, the remnants of the
week’s feast on Saturdays, lentils on Fridays, and, upon the day of the
Sun, a fowl or two more than customary, consuming thus the greater
part of his means."
Seeking numerical data and transforming it
Not only can we give style to the output text (poetic,
author-based, etc.), but we can also ask the language model to
structure the output information as a table for a Word document
or in HTML format for a blog or website. For example, let’s
imagine the following prompt:
Prompt 21
According to the Spanish National Institute of Statistics,
how many people died due to traffic accidents between
2015 and 2020? Structure the information in a table with
two columns, the first column being the year and the
second column the number of fatalities that year.
Gemini answers...
According to the Spanish National Institute of Statistics, between 2015
and 2020, 31,897 people died due to traffic accidents. The information is
presented in the following table:
Year - Number of deceased
2015 - 3.329
2016 - 3.372

<a id="page-48"></a>

---

### [Page 48]

some basic techniques
43
2017 - 3.204
2018 - 3.148
2019 - 3.041
2020 - 2.803
Overall, there is a downward trend in the number of traffic fatalities in
Spain. In 2020, the number of fatalities decreased by 11.2% compared to
the previous year, which is the lowest number of fatalities in one year
since 2013.
The decrease in the number of fatalities is due to a number of factors,
including improved road safety, public awareness of the importance of
road safety and the application of new technologies for road safety.
Source: Instituto Nacional de Estadística de España.
In addition to requesting a table format structure, we can also
ask the language model for other output formats. Do not worry if
you are not familiar with some of them:
• JSON format with two fields: year and number.
• HTML code for a webpage.
• CSV format for opening it with Excel.
In this way, we can see that LLMs can also provide output data
in various structured formats other than plain text for processing
with computer tools.
Prompt
= Task +
Output
Format
Working with different languages
One of the most powerful features of LLMs is their ability to
handle different languages. While text translation is already a
reality with classic tools like Google Translate or DeepL, LLMs
offer many extra advantages, such as:
Prompt 22
can you translate this text to Spanish from Spain: "I need to
catch the bus"

<a id="page-49"></a>

---

### [Page 49]

44
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
Necesito coger el autobús.
We can also request Spanish from Mexico:
Prompt
= Task +
Output
Language
Prompt 23
can you translate this text to Spanish from Mexico: "I need
to catch the bus"
ChatGPT answers...
Necesito tomar el autobús.
As shown, Spanish from Spain and from Mexico differ in the
verbs for "catching the bus".
In addition to translating texts into various languages, it can
also identify the language in which certain texts are written:
Prompt 24
Can you tell me in which language is the following text: "le
ntombazane iyawathanda amakhekhe" and translate it into
Italian?
ChatGPT answers...
The text "le ntombazane iyawathanda amakhekhe" is in Zulu, a language
spoken in South Africa. It translates to "la ragazza ama i dolci" in Italian,
which means "the girl loves sweets" in English.
Or improve a partially correct wording, although with some
errors:
Prompt 25
Can you improve the following text in Spanish and correct
its grammar and style: "ayer, mi amigo ve un coche
accidente sobre la carretera. La policía entró una hora
después y ayudó al motorista".

<a id="page-50"></a>

---

### [Page 50]

some basic techniques
45
ChatGPT answers...
Ayer, mi amigo vio un accidente de coche en la carretera. La policía llegó
una hora después y ayudó al conductor.
Even ChatGPT can work in ancient languages with phrases
that make little sense, providing mechanisms to correct them:
Prompt 26
How would you say in classical Latin: "I drove to work
yesterday"?
ChatGPT answers...
In classical Latin, you might say "Heri ad opus vehiculo meo ivi,"
which translates directly to "Yesterday to work with my vehicle I went."
Classical Latin often uses a different word order than English, and the
concept of driving as we understand it today didn’t exist, so we adapt
with "vehiculo meo" to mean "with my vehicle."
Finally, in the following scenario, ChatGPT attempts to appear
polite:
Prompt 27
Can you provide me with a swear phrase in English to send
someone to hell?
ChatGPT answers...
It’s important to communicate respectfully, even when we’re upset
or frustrated. If you’re looking for a strong way to express discontent
without resorting to offensive language, you might consider phrases like
"I’ve had enough of you!" or "I wish you’d just leave me alone!" These
can convey strong feelings without crossing into rudeness.
There are many more examples where we can observe the
power of LLMs working with different languages. They can
help us compose emails in colloquial or formal style in another
language, correct texts with typical lexical errors, and even

<a id="page-51"></a>

---

### [Page 51]

46
chatgpt: learning prompt engineering with 100+ examples
work with classical languages like Greek or Latin. The reader is
encouraged to explore other uses of LLMs in language handling.
Summary and exercises
In summary, in this chapter, we have explored various ways
to enhance a simple prompt by adding elements to expand,
structure, or summarize the output information. We have also
studied methods to give different styles to the output text and
various formats for its integration into databases, web pages, or
spreadsheets. Finally, we have studied the potential of LLMs in
multilingual text processing.
To conclude, the reader is encouraged to practice what
they’ve learned in this chapter by trying to create prompts for
the following cases. Don’t make just one attempt! LLMs are
incredibly responsive to changes, so try different approaches.
1) Ask it to explain what a derivative is in mathematics and then
ask it to summarize it in simple language for children.
2) Ask it to explain to you why children have nightmares at night
in a single paragraph.
3) Ask it to write a 2,000-word report on the economy in the
Eurozone over the past year. Specify that it should include an
introduction, a section on GDP, another on inflation, another
on public debt and finally a paragraph with conclusions.
4) Ask it to write a poem about your town or city. Add context
explaining how your town or city and its natural surroundings
are. Afterward, you can try asking him to write it as different
poets would: William Shakespeare or Francisco de Quevedo.
5) Ask it to rewrite the lyrics of your favorite song in the style
and language of Stephen King.
6) Ask it to show you how to order a glass of wine in ancient
Rome in Latin.
7) Ask it to write 10 basic phrases for a trip to China, including
how to ask for the bill at a restaurant, request directions to a

<a id="page-52"></a>

---

### [Page 52]

some basic techniques
47
specific hotel for a taxi driver, or inquire about the cost of an
umbrella in a store.

<a id="page-53"></a>

---

### [Page 53]

*(Image / Blank Divider Page)*

<a id="page-54"></a>

---

### [Page 54]

Advanced techniques
I
n this chapter, we will explore more sophisticated prompting
techniques with various uses and applications. These include
techniques for creative writing and composition, problem-solving
using simple mathematics and reasoning. We also delve into
techniques for interpreting sentiments in texts or assigning values
between 0 and 10 to these texts for various purposes.
Mimicking historical figures and assuming roles
One of the most interesting features of LLMs is to request them
to take on a specific role and mimic that role. Below, we illustrate
Prompt
= Task +
Character
Role
this case with a simple question about the meaning of friendship:
Prompt 28
What is friendship?
Gemini answers...
Friendship is a close relationship between people who share common
interests and offer each other trust, support, and affection. It’s more than
just an acquaintance; it involves a deeper bond built on mutual respect
and understanding. Here are some key aspects of friendship:
- Reciprocity: Friends give and take from each other. They offer help and
support when needed and expect the same in return.
- Trust and emotional intimacy: Friendships involve a level of trust
where you feel comfortable sharing your thoughts and feelings, even
vulnerabilities, knowing they won’t be judged.

<a id="page-55"></a>

---

### [Page 55]

50
chatgpt: learning prompt engineering with 100+ examples
- Shared interests and activities: Friends often enjoy spending time
together doing things they both find fun or interesting. These shared
experiences can strengthen the bond.
- Respect and understanding: Friends value each other’s individuality
and perspectives, even when they disagree.
The nature of friendships can vary depending on the people involved.
Some friendships might be close and intense, while others might be
more casual and relaxed. Friendships can also change and grow over
time.
And a condensed version of 100 words for ChatGPT:
Prompt 29
¿What is friendship? Please answer in 100 words.
ChatGPT answers...
Friendship is a cherished bond between individuals, marked by feelings
of care, respect, and affection. Unlike relationships defined by blood or
law, friendships are chosen connections that enrich our lives. They are
built on mutual trust, understanding, and support, flourishing through
shared experiences, joys, and challenges. Friends act as confidants,
cheerleaders, and advisors, offering a shoulder to lean on and laughter
to share. This bond evolves over time, strengthened by loyalty and
the willingness to navigate life’s ups and downs together. In essence,
friendship is a treasure, providing companionship, joy, and a sense of
belonging, making our journey through life richer and more meaningful.
Next, we’re going to ask ChatGPT to respond as Aristotle
would.
Prompt 30
Assume the role of Aristotle to explain what friendship is.
Generate a 100-word response.

<a id="page-56"></a>

---

### [Page 56]

advanced techniques
51
ChatGPT answers...
In the eyes of Aristotle, friendship stands as a cornerstone of human
flourishing, essential to a life well-lived. It transcends mere utility
or fleeting pleasure, embodying a mutual recognition of goodness
and a shared commitment to virtue. True friends seek the best for
each other, for their bond is rooted in the noblest of reasons: virtue
itself. Such friendships are rare, demanding time and familiarity to
cultivate, for they are based not on need or convenience but on the
mutual appreciation of each other’s character. In this perfect form of
friendship, we find a reflection of the highest good, as friends become
mirrors to each other’s souls, encouraging growth towards virtue and
the fulfillment of our potential.
And now, respond as Frodo Baggins from The Lord of the
Rings.
Prompt 31
Assume the role of Frodo from Lord of the Rings to explain
what friendship is. Generate a 100-word response.
ChatGPT answers...
In the heart of Middle-earth, I, Frodo of the Shire, have come to
understand that friendship is the very essence of courage and hope. It’s
the unspoken vow to walk through darkness and face fears not alone,
but hand in hand with those who believe in you, even when you falter.
My journey to Mount Doom was borne not just on my feet, but on the
steadfastness of Sam, the loyalty of Merry and Pippin, and the valor of
all who stood by us. True friendship is the light that guides through the
darkest tunnels, the warmth in the coldest nights. It’s the strength found
not in oneself, but shared among comrades who dare to dream the same
impossible dream.
Let’s switch ChatGPT’s role to Gandhi:

<a id="page-57"></a>

---

### [Page 57]

52
chatgpt: learning prompt engineering with 100+ examples
Prompt 32
Assume the role of Gandhi to explain what friendship is.
Generate a 100-word response.
ChatGPT answers...
In the spirit of Gandhi, friendship is a profound expression of love,
truth, and non-violence. It is not merely a bond of mutual affection
but a sacred trust, a journey together towards greater understanding
and peace. True friendship requires us to see the light within each
other, even during our darkest times, and to support one another in
the pursuit of truth and righteousness. It calls for the courage to be
vulnerable, to share our fears and hopes, and to listen with an open
heart. Friendship, in its essence, is an act of constant forgiveness, a
tender look which becomes a habit. It transcends physical presence,
thriving on a spiritual connection that nurtures our soul, guiding us
towards a more compassionate and selfless life.
And finally, for a Buddhist:
Prompt 33
Assume the role of a Buddhist to explain what friendship
is. Generate a 100-word response.
ChatGPT answers...
From a Buddhist perspective, friendship is a profound connection that
mirrors the principles of loving-kindness (Metta), compassion (Karuna),
sympathetic joy (Mudita), and equanimity (Upekkha). True friends
guide each other along the path to enlightenment, sharing wisdom
and offering support in the face of life’s suffering and impermanence.
They cultivate a selfless bond, free from attachment and ego, fostering
mutual growth and understanding. Friendship in Buddhism is seen as
a treasure, enriching our spiritual journey, encouraging us to practice
mindfulness and ethical living. It is through this sacred connection that
we learn to see the interconnectedness of all beings, nurturing peace and
harmony within ourselves and the world around us.

<a id="page-58"></a>

---

### [Page 58]

advanced techniques
53
As we can see, in each case, the LLM assumes a different role
in explaining friendship from the point of view of different
characters, based on their philosophy, beliefs, and personal
experiences. The answers have a common denominator but
are adapted to the experiences and philosophy of the different
characters.
Likewise, in physics, we could ask about gravity for different
physicists, according to their theories and convictions:
Prompt 34
Assume the role of Sir Isaac Newton in explaining gravity.
ChatGPT answers...
In the character of Sir Isaac Newton, allow me to elucidate upon the
fundamental nature of gravity, a force most pervasive yet invisible that
governs the motion of celestial bodies and the earthly sphere alike.
Conceive, if you will, an apple falling from a tree; it is not merely
by chance that it descends towards the earth rather than taking flight
towards the heavens. This phenomenon is the work of gravity, a natural
force of attraction that all masses exert upon one another, proportional
to their masses and inversely proportional to the square of the distance
between their centers.
It was upon witnessing such an ordinary event as an apple’s descent
that my thoughts were directed to the universal application of this force.
Thus, I postulated that this same force which draws the apple to the
ground also commands the majestic orbit of the moon around the Earth
and the planets around the sun. Hence, gravity is the invisible hand
that maintains the order of the cosmos, ensuring the celestial bodies
move in an elegant, predictable fashion. This understanding laid the
groundwork for the laws of motion and universal gravitation, principles
that illuminate the workings of the universe and the natural world.
Prompt 35
Assume Albert Einstein’s role in explaining gravity.

<a id="page-59"></a>

---

### [Page 59]

54
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
In the guise of Albert Einstein, I shall elucidate the enigmatic force
known as gravity, which until my time had been comprehended
through the lens of Sir Isaac Newton’s laws of motion and universal
gravitation. However, my theory of General Relativity provides a novel
interpretation. Picture, if you will, the fabric of space-time, an invisible,
four-dimensional weave that encompasses the universe. Massive
objects, such as planets and stars, distort this fabric much like a heavy
ball placed on a trampoline. This curvature of space-time is what we
perceive as gravity. It is not merely a force pulling objects together but
the shape of space-time itself directing the paths that objects follow.
Thus, when Earth orbits the Sun, it is not being ’pulled’ in the traditional
sense, but rather following the curved geometry of space-time created
by the Sun’s immense mass. This revolutionary perspective not only
explains the force of gravity but also the motion of planets and the
bending of light, offering profound insights into the very structure of the
universe.
Not only can we ask ChatGPT to take on the role of a person,
but also, as computer experts, we can request it to behave like
a Linux terminal or as a database to which we want to make
queries.
Learning with small examples
In the Few-Shot Prompting (FSP) technique, the prompt includes
Prompt
= Task
Examples
various examples of a task, and the LLM is expected to interpret
and learn from these examples to solve it. Below is an example
for text classification by negative or positive sentiment:
Prompt 36
The ice cream is very good: Positive
This camera is terrible: Negative
New York is awesome: Positive
This book is a bit bland:

<a id="page-60"></a>

---

### [Page 60]

advanced techniques
55
ChatGPT answers...
Negative
In this case, no task to be performed has been specified, some
examples have simply been presented and the LLM is expected to
interpret what to do with them to complete the sentence.
Furthermore, we can observe that the LLM is capable of
identifying feelings in texts. Another example along this line:
Prompt 37
Below is a review of a coffee shop. I would like you to tell
me the 3 most likely feelings of the person who wrote the
review in order of importance:
Neighborhood coffee shop, nice atmosphere and good
customer service.
They always play romantic music at breakfast time. Nice to
hear music from two decades ago from time to time.
The place is clean.
When I order coffee they don’t look at me like they’re
doing me a favor. It’s nice too.
I always have breakfast there when I can.
Recommended
ChatGPT answers...
1. Satisfaction: The reviewer appreciates the atmosphere, cleanliness,
and customer service of the coffee shop, indicating a general feeling of
satisfaction with their experiences there.
2. Nostalgia: The mention of enjoying romantic music from two decades
ago suggests a sense of nostalgia, enjoying the connection to the past
that the music provides.
3. Appreciation: The reviewer values the respectful treatment received
when ordering coffee, indicating appreciation for good service and the
overall welcoming environment of the shop.

<a id="page-61"></a>

---

### [Page 61]

56
chatgpt: learning prompt engineering with 100+ examples
Prompt 38
Below is a review of a coffee shop. If the text contains
a positive review, I would like you to generate a polite
response thanking the customer. If it is negative, I would
like you to generate a polite response with an apology:
Neighborhood coffee shop, nice atmosphere and good
customer service.
They always play romantic music at breakfast time. Nice to
hear music from two decades ago from time to time.
The place is clean.
When I order coffee they don’t look at me like they’re
doing me a favor. It’s nice too.
Whenever I can, I have breakfast there.
Recommended
ChatGPT answers...
Thank you so much for taking the time to leave us this wonderful
review! We’re thrilled to hear that you enjoy the atmosphere, our
selection of music, and the level of customer service at our coffee shop.
It’s our goal to make every visit a pleasant experience, and we’re glad
to know we’ve succeeded with you. We appreciate your kind words
and your recommendation. Looking forward to welcoming you back for
many more breakfasts. Thank you for choosing us for your mornings!
Assigning numerical values to texts
In addition to classifying texts discretely (positive or negative),
we can also ask you to assign values from 0 to 10 for certain
problems. This helps us make comparisons between similar but
different elements, for example:

<a id="page-62"></a>

---

### [Page 62]

advanced techniques
57
Prompt 39
Give me a summary of the movie Quo Vadis and tell me
if the character of Nero resembles the real Nero of ancient
Rome.
ChatGPT answers...
"Quo Vadis" is a historical drama set in the time of the Roman Empire,
under the rule of Emperor Nero. The story, based on the novel by
Henryk Sienkiewicz, focuses on the love between a Roman general,
Marcus Vinicius, and a Christian woman, Lygia. As their love story
unfolds, it is set against the backdrop of Nero’s tyrannical reign,
highlighting the persecution of Christians and the decadence and
corruption of the Roman court. The film showcases Nero’s infamous
acts, such as his artistic pretensions, the burning of Rome, and his
persecution of Christians, blaming them for the fire.
The character of Nero in "Quo Vadis" does capture several historical
aspects of the real Nero’s personality and reign. Historical records
depict Nero as a complex figure known for his cruelty, extravagance, and
vanity. He was an aspiring artist and performer, and there are accounts
of him forcing the Roman elite to attend his lengthy performances. The
great fire of Rome in 64 AD, which led to the persecution of Christians
under his rule, is one of the most notorious episodes associated with his
reign. However, like many historical figures, Nero’s life and actions have
been subject to various interpretations and exaggerations over time.
While "Quo Vadis" includes historical elements true to Nero’s character
and reign, it also incorporates dramatic embellishments typical of
historical fiction. The movie portrays Nero in a manner consistent
with traditional historical views of him as a tyrant and persecutor of
Christians, aligning with many historical sources. However, it is essential
to note that our understanding of Nero is based on historical accounts
that may themselves carry biases, as they were often written by his
contemporaries or later historians with their own perspectives and
agendas.
Next, we force a comparison and force a numerical value:

<a id="page-63"></a>

---

### [Page 63]

58
chatgpt: learning prompt engineering with 100+ examples
Prompt 40
From 0 to 10 where 0 is not at all similar and 10 is totally
similar, how much would you say the character of Nero in
Quo Vadis resembles the real Nero who lived in the Roman
Empire?
ChatGPT answers...
I would rate the resemblance of Nero’s character in "Quo Vadis" to the
real Nero of the Roman Empire around a 7. The film captures several
historically documented aspects of Nero’s personality and reign, such
as his tyranny, persecution of Christians, and self-indulgence. However,
the portrayal also incorporates dramatic elements and interpretations
that may not fully align with historical complexities or the nuances of
his character. While it presents a view of Nero that is consistent with
many historical sources, it’s important to remember that these sources
themselves can be biased or incomplete.
This way, we can leverage the extensive knowledge of LLMs
(history, cinema, etc.) for an initial draft of a comparative critique
between two different themes with common elements.
Arranging elements
In addition to assigning numerical values based on degrees of
similarity to things that resemble each other, we can ask it to
arrange situations by probability, for example:
Prompt 41
Imagine you are a police officer in charge of solving a
murder crime. Order me from highest to lowest which
factor is most important in identifying the killer: person
with some positive or negative sentimental tie to the victim,
someone who stands to benefit financially from the victim’s
death, someone accidental who happened to be passing by.

<a id="page-64"></a>

---

### [Page 64]

advanced techniques
59
ChatGPT answers...
In solving a murder crime, the priority in evaluating suspects typically
follows this order, from highest to lowest importance:
1. Person with some positive or negative sentimental tie to the victim:
Statistically, most crimes, especially homicides, are committed by
someone known to the victim. Emotional or sentimental ties, whether
positive (such as a family member, friend, or lover) or negative (such
as an ex-partner or a known adversary), often provide strong motives
for murder. These relationships can encompass a range of emotions,
including love, jealousy, revenge, or hatred, making individuals within
this category the most likely suspects.
2. Someone who stands to benefit financially from the victim’s death:
Financial gain is another common motive for murder. This can
include beneficiaries of life insurance policies, inheritors of estates, or
individuals involved in business dealings with the victim. While this
motive is significant, it is typically considered after examining those with
close personal ties to the victim, unless there is compelling evidence to
prioritize this motive higher.
3. Someone accidental who happened to be passing by: While it’s not
impossible for a murder to be committed by a random individual or
someone with no apparent connection to the victim, this scenario is
less common compared to murders committed by acquaintances or for
financial gain. These cases often require a different set of investigative
approaches, focusing on evidence left at the scene, witness testimonies,
and surveillance footage to establish any potential links between the
victim and the perpetrator.
Understanding the relationship dynamics, financial entanglements, and
the victim’s social circle often provides crucial insights into the motive,
which is key to solving the crime.
Next, another example where we request to order specific
causes of death:

<a id="page-65"></a>

---

### [Page 65]

60
chatgpt: learning prompt engineering with 100+ examples
Prompt 42
Rank the following causes of death in order from most
deadly to least deadly in Spain: death by lightning, death
by plane crash, death by terrorist act, death by colon cancer,
death by suicide.
ChatGPT answers...
Based on general patterns and statistical data, the ranking of causes
of death in Spain from most deadly to least deadly would likely be as
follows:
1. Death by colon cancer: As a common form of cancer, colon cancer
accounts for a significant number of deaths annually, making it a leading
cause of cancer-related mortality.
2. Death by suicide: Suicide rates vary by country, but it remains a
significant cause of death worldwide, including in Spain, and often
surpasses the number of deaths from certain types of accidents or
individual acts of violence.
3. Death by terrorist act: While the impact of terrorist acts can be severe
and highly publicized, the number of deaths from terrorism is generally
lower than the leading natural causes of death and suicides, especially
when looking at long-term averages.
4. Death by plane crash: Fatalities from plane crashes are relatively rare,
especially compared to common causes of death like diseases or suicide,
due to the high safety standards in aviation.
5. Death by lightning: Deaths by lightning strikes are extremely rare,
making it the least deadly on this list. The odds of being struck by
lightning in a given year are low, and fatalities are even less common.
This ranking is based on the typical frequency and impact of these
causes of death. Specific data can vary year by year, and certain events
might temporarily alter these rankings, but this order reflects general
patterns observed over time.

<a id="page-66"></a>

---

### [Page 66]

advanced techniques
61
Planning and approximate calculations for day-to-day
routines
LLMs can also assist in performing simple calculations and basic
estimations, although it’s important to be careful in this aspect as
reasoning and logic are not their strong suits.
Below is an example regarding planning for a barbecue:
Prompt 43
I want to have a barbecue for 50 guests and I need
your help with the shopping list. First we will grill
assorted vegetables (onion, zucchini, bell bell pepper and
mushrooms) for starters. Then we will cook meat (sausages
and chicken thighs). How much of each item do I need to
buy for the 50 people?
ChatGPT answers...
For a barbecue for 50 guests, it’s important to plan for enough food
without going overboard. Here’s a suggested shopping list based on
typical serving sizes:
Assorted Vegetables for Starters:
- Onion: 1 medium onion serves about 2-3 people, so you might need
around 17-25 onions.
- Zucchini: 1 medium zucchini serves about 2-3 people, so around 17-25
zucchinis should suffice.
- Bell Pepper: 1 bell pepper serves about 2-3 people, thus around 17-25
bell peppers will be needed.
- Mushrooms: About 1/4 pound (4 ounces) per person, so you’ll need
around 12.5 pounds of mushrooms.
Meat:
- Sausages: Assuming 1.5 sausages per person (some might eat 1, some
2), you’ll need about 75 sausages.
- Chicken Thighs

<a id="page-67"></a>

---

### [Page 67]

62
chatgpt: learning prompt engineering with 100+ examples
: Assuming half the guests prefer chicken, and estimating 2 thighs per
person (since they might be smaller and some might take more), you’ll
need around 50 servings. Considering some might eat more or less,
buying about 100 chicken thighs should cover it.
This estimate assumes that everyone will partake in both the vegetables
and meat equally. Adjust the quantities based on your knowledge of
your guests’ dietary preferences (e.g., vegetarians, big meat eaters,
etc.). Also, consider adding extra for guests with larger appetites or
for unexpected plus-ones. It’s always better to have a little too much
than not enough, especially if you can manage leftovers efficiently.
Another example, this time for a wedding budget:
Prompt 44
Assume the role of financial planner. How much would it
cost me to get married in a mid-range restaurant in Madrid
Spain? Calculate a cost for the banquet assuming 100
guests, a 15-day honeymoon in New York and a wedding
attire budget for the bride and groom.
ChatGPT answers...
As a financial planner, let’s break down the potential costs for your
wedding in Madrid, Spain, including the banquet for 100 guests, a
15-day honeymoon in New York, and wedding attire for both the bride
and groom. Please note that the costs can vary widely based on choices
and specifics, so I’ll provide estimates based on a mid-range budget.
Wedding Banquet in Madrid
- Banquet Cost: Mid-range restaurants in Madrid might charge between
€50 to €120 per person for a wedding banquet. This would include food,
drinks, and possibly some basic decorations.
- Total for 100 guests: €5,000 to €12,000
15-day Honeymoon in New York
- Flights: Economy flights from Madrid to New York could range from
€500 to €1,000 per person round trip, depending on the season and how

<a id="page-68"></a>

---

### [Page 68]

advanced techniques
63
early you book.
- Total for 2: €1,000 to €2,000
- Accommodation: Mid-range hotels in New York can cost between €150
to €300 per night.
- Total for 15 nights: €2,250 to €4,500
- Daily Expenses (meals, transportation, entertainment, etc.):
Approximately €200 to €300 per day for two.
- Total for 15 days: €3,000 to €4,500
Wedding Attire
- Bride’s Attire (dress, shoes, accessories): A mid-range budget could
range from €1,000 to €3,000.
- Groom’s Attire (suit, shoes, accessories): A mid-range budget could be
around €500 to €1,000.
Summary of Estimated Costs
- Banquet: €5,000 to €12,000
- Honeymoon (including flights, accommodation, and daily expenses):
€6,250 to €11,000
- Wedding Attire for Both: €1,500 to €4,000
- Total Estimated Cost: €12,750 to €27,000
These estimates provide a broad range based on mid-range options. The
actual costs can vary significantly based on personal preferences, specific
choices, the time of year, and how far in advance you plan and book
services. For a more precise estimate, it’s best to start contacting vendors
and venues directly. Additionally, consider potential savings from
booking packages or negotiating discounts for services like photography,
music, and flowers.
Assisting in reasoning step by step
ChatGPT is a natural language model trained on Internet text that
generates plausible text by predicting words one after another.

<a id="page-69"></a>

---

### [Page 69]

64
chatgpt: learning prompt engineering with 100+ examples
Consequently, language models often struggle when tasked
with complex calculations or reasoning that involves multiple
mathematical steps.
A solution that users have found is simply asking the language
model to perform the task step by step, adding to the prompt
the message: "let’s think step by step". Naturally, this doesn’t
Prompt =
Task + Let’s
think step by
step
make the model think step by step! But it prompts it to generate a
series of steps with logic between them that will likely lead to the
correct solution or at least a solution more similar to the correct
one.
This technique is known as Chain-of-Thoughts (CoT). Let’s look
at some examples:
Prompt 45
Car A costs 30,000 euros, uses 7 liters of gasoline every
100 km and has a durability of 20 years. Car B costs 25000
euros, spends 6 liters of gasoline every 100 km and has a
durability of 17 years. Assuming that I drive 10000 km per
year and the price of gasoline is 1.5 euros per liter, which
car is more profitable to buy? First calculate the total cost
of gasoline for each year, then multiply it by the number of
years, and finally add the purchase price. Finally divide the
total by its duration. Let’s think step by step.
ChatGPT answers...
Let’s go through the calculations step by step for both cars:
Car A:
- Annual cost of gasoline: For driving 10,000 km, Car A, which uses
7 liters of gasoline every 100 km, would require 700 liters of gasoline.
With the price of gasoline at €1.5 per liter, the annual fuel cost would be
€1,050.
- Total cost of gasoline over the car’s durability (20 years): €1,050 * 20 =
€21,000.
- Adding the purchase price of €30,000, the total cost comes to €51,000.
- Dividing this total cost by its durability (20 years) gives us an annual

<a id="page-70"></a>

---

### [Page 70]

advanced techniques
65
cost of €2,550.
Car B:
- Annual cost of gasoline: For the same distance, Car B, which consumes
6 liters of gasoline every 100 km, would need 600 liters of gasoline
annually. Thus, its annual fuel cost would be €900.
- Total cost of gasoline over the car’s durability (17 years): €900 * 17 =
€15,300.
- Including the purchase price of €25,000, the total cost is €40,300.
- Dividing this total by its durability (17 years) results in an annual cost
of approximately €2,371.
Comparing the two, Car B is more economical with a lower annual cost
of approximately €2,371 compared to Car A’s €2,550.
Sometimes, it is even beneficial to guide the LLM with a
prompt that compels it to solve the problem step by step in a
specific manner:
Prompt 46
I need you to calculate the number of kilometers to travel
with a car to have a traffic accident. Let’s think step by
step. First you have to find the number of traffic accidents
in Spain in 2022 and we call that number X. Then, you have
to find the number of vehicles (trucks, cars and motorcycles
included) registered in Spain in 2022, and we call that
number Y. Then, you have to find the average number
of kilometers traveled by a vehicle and we call it Z. With
the parameters X, Y, Z we will calculate the number of
kilometers per accident as Y*Z/X. Let’s think step by step.
ChatGPT answers...
Okay, let’s calculate the number of kilometers to travel with a car to have
a traffic accident in Spain in 2022.
Step 1: Number of traffic accidents.

<a id="page-71"></a>

---

### [Page 71]

66
chatgpt: learning prompt engineering with 100+ examples
According to the DGT report, 114,551 traffic accidents with victims
occurred in Spain in 2022. Of these, 1,145 were fatal.
Step 2: Number of registered vehicles registered
According to the National Statistics Institute (INE), in 2022 there were a
total of 37,718,354 registered vehicles in Spain, of which 29,168,532 were
passenger cars.
Step 3: Average number of kilometers traveled
According to a study by the Mapfre Foundation, the average number of
kilometers traveled by a vehicle in Spain in 2022 was 14,000.
Step 4: Calculation of the average number of kilometers traveled by a
vehicle in Spain in 2022.
Substituting the calculated values in the formula, we obtain that the
number of kilometers to be traveled by a car to have a traffic accident in
Spain in 2022 is Y*Z/X = 29,168,532*14,000/1,145 = 3,415,427,040/1,145 =
303,204.28
Result
The result is that, on average, a car travels 303,204 kilometers in Spain
before having a traffic accident.
Discussion
This result should be interpreted with caution, as it does not take into
account other factors that may influence the probability of having an
accident, such as the age of the driver, the type of vehicle, and the type
of vehicle.
Sometimes, we may find ourselves asking the LLM a question
that we have already solved ourselves a hundred times. In
such cases, we want to see if the LLM follows our reasoning or
provides a different methodology. If the task is complex, we can
also leverage our expertise by providing the model with examples
along with the question on how to solve the task.
This technique can be combined with previous ones like ’Think
step by step’ by sending examples along with the step-by-step
solution, forcing the model to provide a very similar solution.
The number, order, and type of examples are crucial factors.

<a id="page-72"></a>

---

### [Page 72]

advanced techniques
67
Below, we combine the use of examples (Few-Shot Prompting)
with step-by-step reasoning (Chain-of-Thoughts):
Prompt 47
An apartment of 100 meters and 4 rooms costs 200000
and another of 150 meters and 3 rooms costs 240000 and
another of 80 meters and 2 rooms costs 95000 euros. How
much would an apartment of 100 meters and 2 rooms cost?
Let’s think step by step.
ChatGPT answers...
To estimate the cost of a 100 square meter, 2-bedroom apartment, we
need to find a way to relate the price to the size of the apartment and the
number of rooms. However, with only three reference data, we do not
have enough information to establish an exact formula that takes into
account both variables (size and number of rooms) accurately.
However, we can try to make a simplified estimate using the price per
square meter as a base and assuming that the number of rooms does not
significantly affect the price per square meter, which is a very general
assumption and may not reflect the actual real estate market.
First, let’s calculate the price per square meter of each apartment:
1. Apartment of 100 meters and 4 rooms:
200, 000 euros
100 meters
= 2, 000 euros/meter
2. Apartment of 150 meters and 3 rooms:
240, 000 euros
150 meters
= 1, 600 euros/meter
3. Apartment of 80 meters and 2 rooms:
95, 000 euros
80 meters
= 1, 187.50 euros/meter
Now, if we take the average of these prices per square meter, we obtain:
Average price = 2, 000 + 1, 600 + 1, 187.50
3
euros/meter

<a id="page-73"></a>

---

### [Page 73]

68
chatgpt: learning prompt engineering with 100+ examples
Average price per meter = 4, 787.50
3
euros/meter
Average price per meter ≈1, 595.83 euros/meter
Using this average price per square meter, we can estimate the cost of a
100 square meter, 2-bedroom apartment:
Estimated cost = 100 meters × 1, 595.83 euros/meter
Estimated cost ≈159, 583 euros
Therefore, based on this very simplified estimate and assuming that
the number of rooms does not significantly change the price per square
meter, a 100 square meter, 2-bedroom apartment could cost around
159,583 euros. However, it is important to keep in mind that the actual
price can vary significantly depending on factors such as location,
quality of construction, amenities and the current real estate market.
Finally, a (made-up) statistical study looking at the impact of
smoking on life expectancy.
Prompt 48
Assume the role of mathematical and statistical expert. I
have two samples of patients, one of smokers and one of
non-smokers. For the sample of smokers, the ages at death
are: (89, 76, 56, 65, 90, 45). For the non-smokers, the ages
at death are: (99, 67, 88, 84). Can you tell me if smoking
has an impact on life expectancy according to this sample?
Solve the problem step by step and tell me on average how
much longer a smoker lives than a non-smoker according
to these samples.
ChatGPT answers...
The average age at death for smokers in this sample is approximately
70.2 years, while for non-smokers, it’s approximately 84.5 years. This
suggests that, according to these samples, non-smokers live about 14.3
years longer on average than smokers. This difference may indicate an

<a id="page-74"></a>

---

### [Page 74]

advanced techniques
69
impact of smoking on life expectancy, but it’s important to note that
this conclusion is based on a small sample size and does not account
for other potential influencing factors. Further statistical analysis with a
larger sample size and controlling for other variables would be necessary
to draw more definitive conclusions.
Summary and exercises
In this chapter, we have explored advanced prompting
techniques, including step-by-step reasoning (Chain of Thoughts),
with examples (Few-Shot Prompting), the explanation of different
concepts from the perspectives of various roles or characters, the
ability to classify and order texts, and text generation based on
the group it has been classified into.
Below, the reader is presented with a series of exercises to
practice the concepts explained. There is no single solution, so it
is recommended to practice several times with the same exercise,
exploring the different responses obtained.
1) Ask it to tell you what recipes you can make with the food you
have in the fridge.
2) Ask it to rank the characters of the Fellowship of the Ring from
most to least relevant in the story.
3) Ask it to explain the concept of God from the perspective of
the most important philosophers (Aristotle, Saint Thomas
Aquinas, Kant, Nietzsche, etc.).
4) Ask for the best tourist route to visit Madrid and its
surroundings in three days.
5) Ask it to tell you what to pack for a trip to Siberia with a
budget of 800 euros.
6) Ask it to explain how to estimate the number of atoms in
the universe, thinking step by step, based on the number of
galaxies and stars in each galaxy.
7) Ask it to take on the role of a psychologist and explain how to
talk to a friend who has lost a loved one in the family.

<a id="page-75"></a>

---

### [Page 75]

*(Image / Blank Divider Page)*

<a id="page-76"></a>

---

### [Page 76]

Use cases and applications
T
he use cases for ChatGPT are countless and cover practically
any topic or task where text generation is needed. In this
chapter we compile some examples that aim to highlight this
versatility and show the reader the multiple possibilities of LLMs.
LLMs can serve as a great personal assistant. If you’re a
programmer, it can help you with coding and enhance your
productivity. If you’re an investor, it can assist in interpreting
company data. If you’re a teacher, it can help you create
multiple-choice questions and examples for exams and classes.
If you’re a lawyer, the LLM can read complex laws and indicate
the specific article of a law that contains what you’re looking for.
In short, the LLM can aid you in your day-to-day tasks and
make you more productive. As mentioned earlier, the LLM won’t
do your job for you, but it can help you a lot.
Below are several examples.
Laws, contracts and claims
Legal documents often tend to be cumbersome and difficult for
most people to understand . Their wording is directly beyond the
reach of ordinary mortals. Below we show some very common
examples and assess how ChatGPT can be helpful to us.
Understanding the implications of a contract
One of the figures that appears in mortgages is that of the
guarantor; however, many people do not understand all the
implications of guaranteeing a mortgage loan. In this example,

<a id="page-77"></a>

---

### [Page 77]

72
chatgpt: learning prompt engineering with 100+ examples
we ask ChatGPT to review a clause in a mortgage contract and
explain the risks of acting as a guarantor in that contract.
Prompt 49
Pursuant to this clause
The joint and several bond agreed in the present contract,
and which contains the express waiver of the surety/s
to the benefits of division, exclusion and order, implies
for express waiver of the guarantor/s to the benefits of
division, excusion and order, implies for the same/s that
it/they are liable before the BANK for all the economic
consequences of the economic consequences of the contract
(debt for all the concepts; for principal, ordinary and/or
delay interest ordinary and/or of delay, commissions,
expenses, etc.) in the same terms as the borrower, so that
he/she/they are liable to the BANK for all the borrower, so
that, in the event of non-payment by the borrower and/or
termination and early maturity of the loan, the borrower
shall of the loan, the guarantor(s) is/are responsible for
the totality of the borrower’s debt of the borrower, without
the BANK having to proceed judicially before against the
borrower, nor the borrower having the borrower or that the
borrower has become insolvent due to insufficient assets.
If I act as guarantor, what risks do I assume?
ChatGPT answers...
As a guarantor under this clause, you assume several significant risks:
1. Joint and Several Liability: You are jointly and severally liable with the
borrower for all obligations under the contract. This means the bank can
pursue you for the entire amount of the debt, not just a portion, without
having to first seek payment from the borrower.
2. Waiver of Defenses: You waive the benefits of division, exclusion, and
order. Typically, these defenses allow a guarantor to request that the
creditor first exhaust all options against the primary debtor or divide the
responsibility among multiple guarantors. By waiving these, you give

<a id="page-78"></a>

---

### [Page 78]

use cases and applications
73
up the right to insist the bank pursue the borrower first or share liability
equally among all guarantors before being held responsible.
3. Full Debt Liability: You are liable for the full scope of the debt,
including principal, interest (both ordinary and of delay), commissions,
expenses, etc. Essentially, you are on the hook for everything the
borrower owes to the bank.
4. Immediate Responsibility: In the event of the borrower’s default
or if the loan is terminated and matures early, you are immediately
responsible for repaying the full debt. The bank does not need to sue
the borrower first or prove the borrower is insolvent due to insufficient
assets.
Acting as a guarantor, especially under such stringent terms, places
you in a position where you could potentially be responsible for
significant financial obligations should the borrower fail to meet their
responsibilities. It’s essential to fully understand these risks and consider
your ability to cover the debt if required before agreeing to serve as a
guarantor.
We see how ChatGPT can help us understand the clauses
of the contracts we sign, explaining them in a language that is
understandable to us.
Drafting a Parking Space Lease Agreement
Another common scenario is drafting a contract, for example,
for the rental of a parking space. While it is true that it’s easy to
find examples on the internet, ChatGPT can create a customized
contract for us, as we see below.
Prompt 50
Can you draw up a contract for the rental of a parking
space with a deposit of one month, a deposit of 30 euros
for the loan of the remote control and with a clause for the
price to be updated with the Inflation?

<a id="page-79"></a>

---

### [Page 79]

74
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
Sure, here’s a basic template for a parking space rental agreement that
includes the elements you’ve mentioned. Please note, this is a simple
example and may need adjustments to comply with local laws and
specific needs. It’s highly recommended to have a legal professional
review or create any contract to ensure it’s legally binding and fits your
requirements.
—
PARKING SPACE RENTAL AGREEMENT
This Agreement is made and entered into on [Date], by and between
[Landlord’s Name], hereinafter referred to as the "Landlord", and
[Tenant’s Name], hereinafter referred to as the "Tenant".
Whereas, the Landlord desires to lease the parking space to the Tenant,
and the Tenant desires to rent the parking space from the Landlord
under the terms and conditions as set forth herein;
Now, Therefore, for and in consideration of the covenants and
obligations contained herein and other good and valuable consideration,
the receipt and sufficiency of which are hereby acknowledged, the
parties hereto agree as follows:
1. Parking Space Description: The parking space located at
[Address/Location of Parking Space], hereinafter referred to as the
"Parking Space".
2. Term: The term of this Agreement shall commence on [Start Date] and
shall continue until [End Date], unless sooner terminated pursuant to the
provisions hereof.
3. Rent: The Tenant agrees to pay the Landlord a monthly rent of
[Amount] euros for the use of the Parking Space. The rent is payable
on the first day of each month in advance.
4. Deposit:
- The Tenant shall pay a deposit of one month’s rent ([Amount] euros)
at the time of signing this Agreement, to be held by the Landlord as
security for the performance of the Tenant’s obligations under this
Agreement.

<a id="page-80"></a>

---

### [Page 80]

use cases and applications
75
- An additional deposit of 30 euros shall be paid by the Tenant for
the loan of the remote control for the Parking Space. This deposit is
refundable upon the return of the remote control in good working
condition at the end of the Agreement.
5. Inflation Clause: The monthly rent shall be subject to an annual
adjustment in accordance with the inflation rate published by [Relevant
Authority/Institution], not to exceed [Percentage]% of the current rent
per annum. The adjusted rent shall become effective on the anniversary
date of this Agreement.
6. Use of Parking Space: The Parking Space shall be used exclusively
for the parking of one passenger vehicle. No other storage or use is
permitted.
7. Termination:
- Either party may terminate this Agreement by giving [Notice Period,
e.g., 30 days] written notice to the other party.
- In the event of termination, the Tenant shall return the remote control
and vacate the Parking Space by the termination date. Failure to return
the remote control in good working condition will result in the forfeiture
of the remote control deposit.
8. Liability: The Tenant agrees to indemnify and hold the Landlord
harmless from any and all claims, including those of third parties,
arising out of the Tenant’s use of the Parking Space.
9. Governing Law: This Agreement shall be governed by and construed
in accordance with the laws of [Jurisdiction/Country].
10. Amendments: Any amendments to this Agreement must be in
writing and signed by both parties.
IN WITNESS WHEREOF, the parties hereto have executed this Parking
Space Rental Agreement as of the date first above written.
Landlord:
Date:
Tenant:
Date:
—
Remember, this template is a starting point. Specific terms, conditions,
and legal requirements may vary depending on your location and

<a id="page-81"></a>

---

### [Page 81]

76
chatgpt: learning prompt engineering with 100+ examples
situation. Consulting with a legal expert is crucial to ensure your
contract is valid and enforceable.
In this case, ChatGPT provides us with a contract template
containing the requested clauses, significantly simplifying the
drafting process.
Drafting a complain
Another task that unfortunately we have to carry out occasionally
and is not easy is drafting complaints that reference existing
regulations and are accurate but firm. Let’s see how ChatGPT
drafts a complaint.
Prompt 51
In my community of neighbors, some neighbors do not
respect the regulations and take their dogs out into the
street and common areas without being leashed. Can
you write a letter of complaint highlighting that the
regulations are not being complied with and that this
behavior generates risks for the rest of the neighbors? The
letter should be polite but at the same time firm.
ChatGPT answers...
Certainly! Here’s a polite yet firm letter of complaint regarding the issue
of dogs not being leashed in common areas:
—
Dear Neighbors,
I hope this letter finds you well and enjoying our shared community
spaces. I am writing to address a concern that has been observed and
shared by several residents regarding the adherence to our community
regulations, specifically concerning the management of pets within our
common areas and streets.
It has come to our attention that there have been instances where dogs
are taken out and allowed to roam freely without being leashed. While
we all understand and appreciate the joy pets bring into our lives, it is

<a id="page-82"></a>

---

### [Page 82]

use cases and applications
77
also crucial to remember the importance of following the community
rules that we have agreed upon. These rules are in place not just for the
welfare of our pets but also for the safety, comfort, and well-being of all
residents.
Allowing dogs to roam unleashed in the streets and common areas poses
risks that we must all consider seriously. It can lead to uncomfortable or
even dangerous situations for both the pets themselves and for residents,
especially children and those who might be fearful or allergic to animals.
Additionally, it undermines the sense of order and respect for shared
spaces that we strive to maintain in our community.
We kindly remind all pet owners to ensure their dogs are leashed at
all times when in common areas and streets, as per our community
regulations. This simple act of consideration goes a long way in
preventing potential accidents, promoting a safer environment, and
demonstrating respect for your neighbors’ peace of mind.
We believe that our community is a special place because of its residents’
willingness to live harmoniously and respect one another. We trust that
everyone will understand the importance of adhering to this rule and
cooperate to ensure our community remains a safe and pleasant place
for all.
Should you have any questions or require clarification on this matter,
please do not hesitate to reach out to the community management. We
are more than willing to discuss and provide further information to
ensure mutual understanding and compliance.
Thank you for your attention to this matter and your cooperation.
Together, we can continue to make our community a wonderful place
to live for everyone.
Warm regards,
[Your Name]
[Your Contact Information]
[Resident/Position in the Community Association]
—

<a id="page-83"></a>

---

### [Page 83]

78
chatgpt: learning prompt engineering with 100+ examples
This letter balances the need to address the violation of regulations
with a respectful tone, encouraging cooperation and compliance for the
benefit of the entire community.
Once again, ChatGPT is capable of composing a letter that can
serve as a starting point for the complaint.
Education
Another task in which ChatGPT can be very useful is in the
educational environment, both for students and teachers. For
instance, ChatGPT can assist in summarizing content, explaining
it with examples to enhance understanding, and evaluating
knowledge. Below, we demonstrate some of these possibilities
with simple examples.
Assessing Our Knowledge
We can start by asking ChatGPT to propose math exercises for a
child.
Prompt 52
Can you propose 10 math problems for children 6 year old?
ChatGPT answers...
Certainly! Here are 10 math problems suitable for a 6-year-old. These
problems focus on basic arithmetic, counting, and simple logic, which
are appropriate for their age group.
Math Problems for a 6-Year-Old
1. Counting Stars: If you see 3 stars in one part of the sky and 2 more
stars in another part, how many stars do you see in total?
2. Apple Picking: You have 4 apples and your friend gives you 3 more
apples. How many apples do you have now?
3. Toy Cars: There are 5 toy cars in a box. If you take out 2 toy cars, how
many are left in the box?

<a id="page-84"></a>

---

### [Page 84]

use cases and applications
79
4. Sharing Cookies: If you have 10 cookies and you want to share them
equally between you and your friend, how many cookies will each of
you get?
5. Balloon Count: You have 8 balloons. 2 balloons pop. How many
balloons are left?
6. Penny Jar: If you put 2 pennies in a jar and then add 3 more pennies,
how many pennies are in the jar?
7. Number Sequence: What number comes next in this sequence: 1, 2, 3,
4, ...
8. Finding Differences: You see 7 birds on a tree. 3 fly away. How many
birds are left on the tree?
9. Lemonade Stand: You have 5 cups of lemonade. You sell 2 cups. How
many cups do you have left?
10. Birthday Party: You invite 4 friends to your birthday party. 2 more
friends ask if they can come too. How many friends are coming to your
party in total?
These problems encourage counting, basic addition and subtraction, and
understanding quantities in a fun and engaging way.
ChatGPT also knows about laws:
Prompt 53
Can you generate a quiz with four multiple-choice
questions on fundamental aspects of the American
Constitution?
ChatGPT answers...
Certainly! Here’s a quiz with four multiple-choice questions covering
fundamental aspects of the American Constitution.
Quiz: The American Constitution
Question 1: What year was the United States Constitution ratified?
- A) 1776

<a id="page-85"></a>

---

### [Page 85]

80
chatgpt: learning prompt engineering with 100+ examples
- B) 1787
- C) 1791
- D) 1804
Question 2: Which of the following principles is NOT explicitly outlined
in the United States Constitution?
- A) Separation of powers
- B) Judicial review
- C) Federalism
- D) The right to privacy
Question 3: How many amendments does the United States Constitution
currently have?
- A) 10
- B) 27
- C) 33
- D) 50
Question 4: Which amendment provides for the right to bear arms?
- A) First Amendment
- B) Second Amendment
- C) Fourth Amendment
- D) Eighth Amendment
Answers:
Question 1: B) 1787
Question 2: D) The right to privacy
Question 3: B) 27
Question 4: B) Second Amendment
These questions touch on the ratification date, the principles outlined
in the Constitution, the number of amendments, and specific rights
guaranteed by the amendments.

<a id="page-86"></a>

---

### [Page 86]

use cases and applications
81
Summarizing the content
Let’s go back to the Constitution and see if ChatGPT can
summarize some of the content that we need to study.
Prompt 54
Can you summarise the first amendment of the US
Constitution in 300 words?
ChatGPT answers...
The First Amendment to the United States Constitution is a pivotal
part of the Bill of Rights, ratified on December 15, 1791. It safeguards
fundamental freedoms that are crucial to the democratic framework of
the United States. This amendment prohibits Congress from enacting
laws that would infringe upon the freedom of speech, the press, the
right to peaceably assemble, and the right to petition the government
for a redress of grievances. Additionally, it ensures that Congress cannot
make laws respecting an establishment of religion, or prohibiting the free
exercise thereof, thereby enshrining the principle of separation of church
and state.
The First Amendment’s protection of speech and expression is broad
and includes not only verbal and written expression but also symbolic
actions. This protection is not absolute; certain types of speech, such
as obscenity, defamation, and incitement to violence, do not receive
protection under the First Amendment. The freedom of the press allows
for the dissemination of information and opinions without governmental
restraint, a cornerstone of a transparent and accountable government.
The clause regarding religion is twofold: it prevents the government
from establishing an official religion (the Establishment Clause) or
interfering with individuals’ practice of their faith (the Free Exercise
Clause). This dual protection ensures both a public sphere free from
governmentally imposed religion and a private sphere where religious
freedom can be exercised.
The rights to assemble peaceably and to petition the government are
foundational to the democratic process, allowing citizens to express
their views, demand change, and engage in various forms of protest and

<a id="page-87"></a>

---

### [Page 87]

82
chatgpt: learning prompt engineering with 100+ examples
advocacy without fear of retribution from the state.
Overall, the First Amendment embodies the essence of American
democratic ideals by protecting the freedoms that allow for a vibrant and
open society, where ideas can be freely exchanged, and the government
remains responsive to the will of the people.
The result is a summary that can be useful to us. Additionally,
if we have a specific text that ChatGPT is not familiar with, we
can also ask it to generate a summary for us.
Communication
Another area where it’s necessary to generate a large amount
of text is communication. From an individual perspective, for
example, by composing emails. In the institutional context, it can
be very helpful when creating press releases. Let’s do a little test.
Emails and letters
One of the most common tasks for many of us is composing and
responding to emails and messages from others. This takes up a
considerable amount of our time, which we can reduce with the
help of ChatGPT. Let’s see an example.
Prompt 55
Can you write a fun birthday party invitation?
ChatGPT answers...
You’re Invited to a Blast of a Birthday Bash!
Hey there, Awesome Human!
Mark Your Calendars!
Date: [Your Party Date Here]
Time: [Your Party Time Here]
Venue: [Your Party Venue Here] - Where the fun never ends, and the
magic begins!

<a id="page-88"></a>

---

### [Page 88]

use cases and applications
83
Prepare yourself for an adventure into the realm of sheer joy and
unstoppable giggles as we celebrate [Name]’s Birthday! We’re turning
the fun up to 11, and you’re on the VIP list for this exhilarating journey.
What’s On The Agenda?
- A Quest for Treasure: Unleash the inner explorer with a treasure hunt
that’ll take you to the four corners of [Venue]!
- The Great Feast: Indulge in a spread that would make kings and
queens jealous.
- Dance-off Showdown: Bust a move, break it down, and let the rhythm
take control in the ultimate dance-off!
- Cake Time: No explanation needed. It’s cake. Glorious, delicious cake.
Dress Code: Come as you are or dress as your favorite character from
any universe. Whether you’re a superhero, a pirate, or a wizard, let your
imagination run wild!
RSVP: By [RSVP Date] to [Your Contact Information] - let us know if you
can make it to the party of the century!
Don’t forget to bring your biggest smiles, your wildest dance moves, and
your appetite for fun (and cake!). This is one party you won’t want to
miss. Let’s make some unforgettable memories and celebrate [Name]’s
special day together!
See you there, where the fun explodes, and the laughter never ends!
With joy and anticipation,
[Your Name]
Similarly, by providing an email, we can ask ChatGPT to write
a response to the emails we receive. Let’s ask it to write an email
to excuse our absence from a meeting.
Prompt 56
Can you write an e-mail excusing my presence at a meeting
due to an unforeseen event?

<a id="page-89"></a>

---

### [Page 89]

84
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
Subject: Apology for Missing Today’s Meeting
Dear [Recipient’s Name],
I hope this message finds you well. I am writing to inform you and
express my sincere apologies for not being able to attend the meeting
scheduled for today, [Date], regarding [Meeting Topic].
Unfortunately, an unforeseen event has arisen that requires my
immediate attention and presence, making it impossible for me to
join you and the team as planned. I understand the importance of this
meeting, and it was certainly not my intention to miss such a crucial
discussion.
To ensure that my absence does not hinder our progress, I have taken the
following steps:
- I have reviewed the agenda and provided my input and comments on
[Specific Topics/Items] to [Colleague’s Name], who has kindly agreed to
represent my views during the discussion.
- I am also available to assist with any follow-up actions or to provide
further clarification on the points I submitted to [Colleague’s Name].
- I will make sure to catch up on the meeting notes and any decisions
made today. Additionally, I would appreciate it if we could schedule a
brief call or meeting at your earliest convenience to discuss any critical
outcomes and how I can contribute to the next steps.
I regret any inconvenience my absence may cause and thank you for
your understanding and support in this matter. I value our work and
collaboration greatly and look forward to contributing to our shared
goals in any way I can.
Please extend my apologies to the rest of the team, and let them know
I am fully committed to catching up and contributing to the ongoing
projects.
Thank you for your comprehension.
Best regards,
[Your Name]

<a id="page-90"></a>

---

### [Page 90]

use cases and applications
85
[Your Position]
[Your Contact Information]
The email isn’t bad, and if we provide more details about the
unexpected event or the meeting, ChatGPT will give us a better
result.
Finally, we can ask ChatGPT to write a draft letter of
recommendation for an employee we know.
Prompt 57
Can you generate a letter of recommendation of an
employee that works with me: he is very hard worker and
clever, he can learn almost anything (he likes self-studying).
His background is mathematics and computer science. He
also works well in teams and has good communication
skills, and knows a bit of French
ChatGPT answers...
Certainly! Below is a template for a letter of recommendation that you
can customize for your employee:
—
[Your Name]
[Your Position]
[Your Company/Organization]
[Company Address]
[City, State, Zip Code]
[Email Address]
[Phone Number]
[Date]
[Recipient’s Name]
[Recipient’s Position, if known]

<a id="page-91"></a>

---

### [Page 91]

86
chatgpt: learning prompt engineering with 100+ examples
[Company/Organization Name]
[Company Address]
[City, State, Zip Code]
Dear [Recipient’s Name],
I am writing to wholeheartedly recommend [Employee’s Name] for any
position requiring hard work, intelligence, and a strong proficiency
in mathematics and computer science. As [Your Position] at [Your
Company/Organization], I have had the pleasure of working closely
with [Employee’s Name] for [duration of employment], during which
time he has consistently impressed me with his work ethic, quick
learning ability, and excellent team collaboration skills.
[Employee’s Name] has a solid foundation in mathematics and computer
science, which he has skillfully applied to a variety of projects in our
organization. His passion for self-study and continuous improvement is
remarkable; he is always on the lookout for new skills to learn and ways
to enhance his current expertise. This self-driven approach to personal
and professional development has made him an invaluable asset to our
team.
Moreover, [Employee’s Name] possesses strong communication skills,
both in written and verbal forms, making him an effective communicator
with team members, management, and stakeholders. His ability to
explain complex concepts in an understandable manner has greatly
facilitated team projects and contributed to the success of our endeavors.
In addition to his technical skills and work ethic, [Employee’s Name] is
also proficient in French, which has proven beneficial in our interactions
with French-speaking partners and clients. His ability to bridge
language barriers has enhanced our team’s effectiveness in international
projects.
[Employee’s Name] is a true team player, always ready to lend a hand
to his colleagues and contribute positively to the team atmosphere. His
optimistic attitude and ability to work well under pressure have made
him a go-to person for challenging projects.
In conclusion, I have no reservations in recommending [Employee’s
Name] for any position or endeavor that he chooses to pursue. I am

<a id="page-92"></a>

---

### [Page 92]

use cases and applications
87
confident that he will bring the same level of dedication, intelligence,
and skill to his future roles as he has shown during his tenure with us.
Please do not hesitate to contact me if you require further information.
Sincerely,
[Your Name]
[Your Position]
[Your Company/Organization]
—
Feel free to adjust the details to better fit the individual you’re
recommending and the specifics of his accomplishments within your
organization.
Drafting a text based on some data
In our day-to-day lives, we often deal with data that we need
to analyze and discuss. For example, a company’s sales data,
customer satisfaction indicators, student results—the list is
endless. These tasks consume time, both for analyzing the data
and then documenting the analysis in a report or note. Therefore,
a bit of assistance wouldn’t hurt. Let’s see if ChatGPT can help
with this.
Prompt 58
Please write an analysis of the following table of data:
2020 2021 2021 2022 2023
Number of students 24 19 25 30 30
Males 14 11 14 16 16
Females 10 9 11 14
Average grade 5.5 5.7 5.9 5.9 6.1

<a id="page-93"></a>

---

### [Page 93]

88
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
The provided table outlines data over a period from 2020 to 2023,
detailing the number of students, their gender distribution, and their
average grades over these years. Let’s analyze the data step by step.
1. Trend in Student Enrollment:
- The number of students has generally increased over the period,
starting from 24 students in 2020 and rising to 30 by 2023. There was
a slight decrease in 2021 to 19 students but then a steady increase in the
following years.
2. Gender Distribution:
- The number of male students has shown a slight fluctuation but
indicates an overall increasing trend from 14 in 2020 to 16 in 2023.
Despite a drop to 11 in 2021, numbers recovered and grew in the
following years.
- Female students’ numbers initially decreased from 10 in 2020 to 9
in 2021, then increased to 14 by 2022. The data for females in 2023 is
missing, preventing a complete analysis for that year.
3. Average Grade:
- There’s been a gradual improvement in the average grade, starting
from 5.5 in 2020 and reaching 6.1 by 2023. This suggests an enhancement
in academic performance over the years, with a steady increase in the
average grade.
Observations:
- The overall trend shows growth in both enrollment and academic
performance. The dip in student numbers in 2021 could be attributed
to external factors, but the subsequent recovery indicates resilience and
potential growth in the student body.
- The gender distribution reveals that while both male and female
enrollments have increased, the pattern for males has been more
consistent. The reason for the drop in female students in 2021 and the
lack of data for 2023 needs further investigation.
- The improvement in average grades over the years is a positive
sign, indicating either an improvement in teaching methods, student

<a id="page-94"></a>

---

### [Page 94]

use cases and applications
89
dedication, or both. The consistent upward trend is a good indicator of
educational quality and student achievement.
Limitations:
- The missing data for female students in 2023 makes it difficult to
provide a full analysis of gender distribution for that year.
- Without additional context or data (e.g., changes in curriculum,
teaching staff, or student demographics), it’s challenging to pinpoint
the exact reasons behind the trends observed.
Conclusion:
The data reflects an overall positive trend in both student enrollment
and academic performance from 2020 to 2023, despite a temporary
drop in 2021. The increase in average grades suggests improvements in
educational outcomes, a goal for any educational institution. Further
analysis, particularly with complete data for 2023 and additional
contextual information, would provide a more in-depth understanding
of the underlying factors influencing these trends.
Administration and numbers
Another task that generally feels tedious is management and
administration, especially when dealing with numbers. For
instance, when grappling with a spreadsheet or making financial
decisions. Let’s see if ChatGPT can lend us a hand.
Formulas in Excel
Sometimes we need to turn to Excel to perform calculations or
process data, for instance, to track monthly expenses, create
a budget, or, for teachers, calculate grades. When it comes
to entering a new formula, it can be challenging. Let’s see if
ChatGPT can help us.

<a id="page-95"></a>

---

### [Page 95]

90
chatgpt: learning prompt engineering with 100+ examples
Prompt 59
Can you give me the formula in excel that if A1 is greater
than A2 add A1, A2 and A3 divide by three and otherwise
return the sum of twice A2 and A3 divided by three?
ChatGPT answers...
You can use the following Excel formula to achieve the described
calculation:
=IF(A1 > A2, (A1 + A2 + A3) / 3, (2*A2 + A3) / 3)
This formula checks if A1 is greater than A2. If true, it adds A1, A2,
and A3, then divides the sum by 3. If not, it sums twice A2 and A3, and
divides that sum by 3.
ChatGPT is capable of providing us with the formula through
a very simple prompt. In general, ChatGPT can assist us not only
with Excel but also if we want to program. In fact, one of the uses
of AI is to help programmers write programs more efficiently.
We can also encounter the inverse problem, receiving an Excel
sheet that we have to use but not understanding the formulas.
Let’s try with the formula we just created.
Prompt 60
Can you explain in a nutshell what this Excel formula does:
IF(A1>A2; (A1+A2+A3)/3; (2*A2+A3)/3)?
ChatGPT answers...
This Excel formula evaluates whether the value in cell A1 is greater than
the value in cell A2. If this condition is true, it calculates the average of
the values in cells A1, A2, and A3 by adding them together and dividing
the sum by 3. If the condition is not true (meaning A1 is not greater than
A2), then it calculates a new value by doubling the value in A2, adding
the value in A3, and dividing the result by 3. Essentially, this formula
decides between two different operations based on the comparison of
values in A1 and A2, then applies the chosen operation to generate a
result.

<a id="page-96"></a>

---

### [Page 96]

use cases and applications
91
Once again, ChatGPT is able to interpret the Excel formula and
explain it in a simple and coherent manner.
Doing calculations
Calculations are another task that often feels tedious and can lead
us to waste money. Let’s say we want to understand the impact
of different options on our family expenses, but we don’t have
the exact data on our consumption, and we’re fine with having
an approximate estimate. Let’s see if ChatGPT can make an initial
estimation.
Prompt 61
For an average family with two small children, what
approximate annual savings can we make by buying milk
20 euro cents cheaper?
ChatGPT answers...
To estimate the annual savings for a family by buying milk 20 euro cents
cheaper, we need to make a few assumptions about the family’s milk
consumption. Let’s assume the following:
- Each member of the family consumes an average of 0.25 liters (a glass)
of milk per day.
- There are 4 members in the family, so total daily consumption is 1 liter
(0.25 liters * 4).
Now, let’s calculate the annual savings:
1. Daily savings: If they save 20 euro cents per liter, then daily savings
are 0.20 euros (since they consume 1 liter a day).
2. Annual savings: Multiply the daily savings by the number of days in a
year (365).
Let’s calculate the annual savings.
By buying milk 20 euro cents cheaper, an average family with two small
children can approximate an annual savings of 73 euros.
We see that ChatGPT can be helpful even when we don’t know

<a id="page-97"></a>

---

### [Page 97]

92
chatgpt: learning prompt engineering with 100+ examples
our exact consumption. In this case, we see that saving on milk is
equivalent to saving on parsley.
In the next case, we request a budget for a home renovation:
Prompt 62
Assume the role of real estate analyst and home renovation
expert. How much would it cost to renovate an entire
kitchen? Prepare a budget that includes changing
plumbing and pipes, new floor and wall and kitchen
furniture. The kitchen is 15 square meters in size.
ChatGPT answers...
Creating a budget for renovating a 15 square meter kitchen involves
considering various factors including the cost of materials, labor, and the
quality and complexity of the finishes desired. The costs can vary widely
based on geographic location, the extent of changes, and the choice
between standard, mid-range, or luxury finishes. For the sake of this
budget, we’ll use average costs for a mid-range renovation in a generic
location. Remember, these are estimates and actual costs can vary.
1. Changing Plumbing and Pipes:
- New plumbing and pipes can be a significant cost, especially if the
layout is being changed significantly. This might include moving a sink
or installing additional water lines for an ice maker in a refrigerator.
- Estimated Cost: $3,000 - $5,000
2. New Flooring:
- Options include tiles, hardwood, laminate, or vinyl. Prices vary greatly,
but we’ll estimate for mid-range quality tiles.
- Estimated Cost: $20 per square meter** for materials and installation,
totaling $300 for 15 square meters.
3. Wall Treatment:
- This could include paint, backsplash tiles, or other finishes. Backsplash
tiles can add both aesthetic and functional improvements.
- Estimated Cost for Painting: $500

<a id="page-98"></a>

---

### [Page 98]

use cases and applications
93
- Estimated Cost for Backsplash: $800 (including materials and labor)
4. Kitchen Furniture:
- This includes cabinets, countertops, and possibly an island. The cost
can vary greatly based on the materials (e.g., laminate, wood, granite)
and whether the cabinets are custom or stock.
- Estimated Cost: $5,000 - $15,000
5. Appliances and Extras:
- Not included in the initial question but significant in kitchen
renovations. This includes a refrigerator, oven, range, dishwasher, etc.
- Estimated Cost: $5,000 - $8,000 for mid-range appliances.
6. Labor Costs:
- Labor costs can vary, but for a project of this scale, they can be
significant, especially for specialized work like plumbing.
- Estimated Labor Cost: 20-30% of the total project cost
Total Estimated Budget:
- Plumbing and Pipes: $4,000 (average)
- Flooring: $300
- Wall Treatment: $1,300 (combined painting and backsplash)
- Kitchen Furniture: $10,000 (average)
- Appliances (if considered): $6,500 (average)
Assuming labor costs are included in each section, the total without
appliances would be $15,600. With appliances, this could rise to
approximately $22,100.
Note: This is a broad estimation. Prices can vary widely based on
location, choices made during the selection of materials, and changes
in market conditions. Always get multiple quotes from contractors and
consider hiring a designer or architect for detailed planning and accurate
estimates.
With this example, we can get a rough idea of the indicative
price to evaluate proposals received from various companies.

<a id="page-99"></a>

---

### [Page 99]

94
chatgpt: learning prompt engineering with 100+ examples
Companies
In the previous examples, we focused on the personal use of
ChatGPT. Let’s now explore some use cases within the business
world. Again, the potential applications are countless, so we’ll
just touch on a few to showcase the immense potential of LLMs in
enhancing productivity.
A significant portion of daily tasks in businesses is
administrative and involves text writing. For instance, to manage
the hiring of an individual by a human resources department, we
need, as a first step, a description of the profile required for the
position to be filled. Let’s see if ChatGPT can help us.
Prompt 63
Can you prepare a job description for a human resources
manager of a company in the industrial sector that has a
national presence and plans for international development?
ChatGPT answers...
Job Title: Human Resources Manager
Location: [City, Country] - With potential for international travel.
Company Overview:
[Company Name] is a dynamic and growing company in the industrial
sector with a strong national presence and ambitious plans for
international development. Our commitment to innovation, excellence,
and employee empowerment fuels our mission to be a leader in our
industry. We believe that our people are our greatest asset, and we are
seeking a skilled Human Resources Manager to lead our HR efforts and
support our expansion.
Position Summary:
The Human Resources Manager will play a pivotal role in developing
and executing our human resources strategy in support of the overall
business plan and strategic direction of the company, specifically
in the areas of succession planning, talent management, change
management, organizational and performance management, training

<a id="page-100"></a>

---

### [Page 100]

use cases and applications
95
and development, and compensation. The HR Manager will provide
strategic leadership by articulating HR needs and plans to the executive
management team, shareholders, and the board of directors.
Key Responsibilities:
- Develop and implement HR strategies and initiatives aligned with the
overall business strategy.
- Bridge management and employee relations by addressing demands,
grievances, or other issues.
- Manage the recruitment and selection process to support the
company’s growth and international expansion.
- Support current and future business needs through the development,
engagement, motivation, and preservation of human capital.
- Develop and monitor overall HR strategies, systems, tactics, and
procedures across the organization.
- Oversee and manage a performance appraisal system that drives high
performance.
- Maintain pay plan and benefits program.
- Assess training needs to apply and monitor training programs.
- Ensure legal compliance throughout human resource management.
- Promote corporate values and shape a positive culture.
Qualifications:
- Proven working experience as HR Manager or other HR Executive.
- People-oriented and results-driven.
- Demonstrable experience with HR metrics.
- Knowledge of HR systems and databases.
- Ability to architect strategy along with leadership skills.
- Excellent active listening, negotiation, and presentation skills.
- Competence to build and effectively manage interpersonal
relationships at all levels of the company.

<a id="page-101"></a>

---

### [Page 101]

96
chatgpt: learning prompt engineering with 100+ examples
- In-depth knowledge of labor law and HR best practices.
- Degree in Human Resources or related field; Master’s degree preferred.
We Offer:
- A competitive salary and benefits package.
- Opportunities for professional growth and international travel.
- A dynamic and supportive work environment where you can make a
significant impact.
Application Process:
Qualified candidates are invited to send their resume, cover letter, and
any relevant certifications to [insert email address or application link
here] by [application deadline].
[Company Name] is an equal opportunity employer. We celebrate
diversity and are committed to creating an inclusive environment for
all employees.
The result is not bad at all. We already have a description that
we can refine or adapt.
Summary and exercises
In this chapter, we have explored applications of LLMs in various
personal and professional contexts. We encourage you to continue
practicing with the following exercises:
1) Write a prompt requesting a recipe for a cooking blog. Explain
that you would like a step-by-step recipe for making salmon
sushi and ask for some YouTube channel suggestions related to
Japanese cuisine.
2) Write a prompt requesting an estimate of the taxes you would
have to pay for a gross annual salary of 40,000 euros in Spain.
You should aim to obtain a monthly net value considering that
you live in Madrid (regional deductions) and are married with
three children (deductions for a large family)
3) You need to conduct a study on the legal situation in various

<a id="page-102"></a>

---

### [Page 102]

use cases and applications
97
countries. Write a prompt to create a news article covering
the existing legislation regarding penalties for murder in
countries like Thailand, Spain, and the USA. You need to know
the approximate penalties for a murder that occurred in a
bar, where an intoxicated person stabbed another intoxicated
person during a braw.
4) Ask what the recommended dosage of antibiotics would be for
a 6-year-old girl who weighs 24 kilograms and has a urinary
tract infection.
5) Introduce the text of a current political news and request an
optimistic and a pessimistic headline.
6) Ask for 10 exercises on systems of equations with two
equations and two unknowns to practice. Also, request
solutions to verify the results.
7) Ask for a plan to visit Paris in 3 days. Request
recommendations for the most interesting places, considering
that you want to visit at most one museum. Also, ask for
recommendations for typical French dishes and restaurants
where they serve them.
8) Ask to draft a CV with your skills, education, and experience.
Additionally, request to write a cover letter for an artificial
intelligence consulting company.

<a id="page-103"></a>

---

### [Page 103]

*(Image / Blank Divider Page)*

<a id="page-104"></a>

---

### [Page 104]

Playing with images
G
eenerative AI not only works with text, it can also analyze,
modify or generate images. In this chapter we are going
to see some practical examples of using ChatGPT (version 4) to
process and generate images. We can ask it to generate an image
from a text description but we can also drag an image into the
ChatGPT interface and ask it a question about the image.
Medical images
Asking for advice on oral health
We start with a photo of the mouth to see if ChatGPT can advise
us on our oral health. We can take a picture of our mouth with
our mobile phone and ask ChatGPT for advice.
Prompt 64
In the attached image, do you think the teeth are well cared
for and healthy?
ChatGPT answers...
I cannot provide a medical diagnosis or make definitive statements
about a person’s oral health. However, I can offer some general
observations based on the image:
- Coloration: The teeth appear to be relatively uniform in color, with no
obvious dark spots that often indicate decay or damage.

<a id="page-105"></a>

---

### [Page 105]

100
chatgpt: learning prompt engineering with 100+ examples
Figure 6.1: Gums
- Cleanliness: There are no visible signs of plaque or tartar buildup in
the areas that can be seen, which might suggest good oral hygiene.
- Gingiva: The gum line looks pink, although there are areas that appear
to be more reddish, which could indicate some inflammation.
- Tooth structure: There is no visible evidence of fractures or major
damage to the teeth.
It is important to remember that these observations are superficial
and based only on what is visible in the image. Only a dental health
professional can provide an accurate assessment of the condition of the
teeth and overall oral health after an in-person examination.
We can see that in the medical aspect, ChatGPT is very careful
when making recommendations or diagnoses. However, we can
observe that ChatGPT is able to analyze the image and provide us
with a fairly accurate diagnosis, although perhaps the gums are a
bit receded.
Interpreting an x-ray
Continuing with medical applications, let’s see if ChatGPT can
interpret an x-ray. To do this, we give ChatGPT an x-ray of a
smoker’s lungs, but we don’t tell it.

<a id="page-106"></a>

---

### [Page 106]

playing with images
101
Prompt 65
Attached is an x-ray of a person’s lungs. Assume the role
of a medical specialist. What can you tell me about this
person’s lungs?
Figure 6.2: X-ray of a person’s lungs
ChatGPT answers...
I am not trained to interpret medical images or provide medical
diagnosis or advice. However, I can give you a general idea of how a
physician might approach a chest x-ray:
A medical specialist, in evaluating a chest X-ray, would look for patterns
that might indicate normal or abnormal conditions. For example, he or
she would look for clarity of the lung fields, visibility of structures such
as the mediastinum, the shape and size of the heart, and the presence of
any opacity, consolidation or signs of lung disease such as pneumonia,
COPD or masses that might suggest tumors.
On the image provided, if areas of increased density or staining are
noted, the physician might consider a variety of differential diagnoses
and would likely recommend additional testing or refer the patient to a
specialist for further evaluation.

<a id="page-107"></a>

---

### [Page 107]

102
chatgpt: learning prompt engineering with 100+ examples
If you have specific concerns about this X-ray or lung health in
general, I encourage you to consult a licensed physician who can
offer a professional interpretation and advice based on an in-person
examination and a thorough review of the patient’s medical history.
Prompt 66
Would you say the image corresponds to a smoker yes or
no?
ChatGPT answers...
I cannot provide an interpretation or diagnosis based on an X-ray, as
this is beyond my capabilities and also requires specialized medical
knowledge. A specialist physician would use his or her training to
interpret the x-ray in the context of the patient’s medical history,
symptoms and other tests. Smoking may be one of many factors that
the physician would consider when assessing lung health, but it is not
possible to determine if someone is a smoker from an X-ray image alone.
In addition, changes in the lungs visible on an X-ray may be due to a
variety of causes, not just smoking.
For a proper evaluation, please consult a healthcare professional.
Again, ChatGPT is very careful about medical matters,
although it does show that it has identified spots in the lungs.
Most commercial artificial intelligence tools have been designed to
avoid offensive responses or not to provide information that could
lead to liability for the company. In this example we see how
ChatGPT insists that we must contact a healthcare professional.
Analyzing text within images
Next, we look at ChatGPT’s ability to recognize text within
images and interpret it.

<a id="page-108"></a>

---

### [Page 108]

playing with images
103
A blood test
Prompt 67
Can you explain these blood test results?
Figure 6.3: A Blood test
ChatGPT answers...
The image depicts a table of blood test results with three columns
indicating reference values, initial results, post-chemotherapy results,
and post-transplant results. Here’s a brief explanation:
- Hemoglobin (g/dL): It’s within normal range post-chemotherapy and
post-transplant.
- Mean corpuscular volume (fL): Indicates the average size of red blood
cells. It remains consistent throughout.

<a id="page-109"></a>

---

### [Page 109]

104
chatgpt: learning prompt engineering with 100+ examples
- Leukocytes (109/L): White blood cell count is higher than normal
initially but returns to normal post-chemotherapy and post-transplant.
- Platelets (109/L): Platelet count is within normal range
post-chemotherapy and slightly lower post-transplant.
- Reticulocytes (%): Post-chemotherapy data is not determined (ND);
post-transplant, it’s slightly lower than the initial value but within
normal range.
- Coagulation tests (APTT, PT INR, and D-dimers): Assess blood
clotting. Initially, APTT is high, indicating a potential clotting problem,
but normalizes post-chemotherapy and post-transplant. PT INR is stable
and within normal range. D-dimers are initially elevated, suggesting
possible clot formation or breakdown, but are normal post-therapy.
- Kidney function tests (Urea, Creatinine): Both are initially elevated but
normalize, indicating improved kidney function.
- Liver function tests (Calcemia, LDH, Albumin, AST/ALT, GGT, Total
bilirubin): Initially, some liver function tests are abnormal but improve
post-therapy, suggesting a resolving condition or response to treatment.
- Iron and related tests: Initially high iron but ferritin (iron storage
protein) is normal. Post-chemotherapy, iron remains high, but ferritin
is not determined.
- Vitamin levels (B12, Folate): Initially normal but not determined
post-therapy.
- Coagulation factors (V, VII, VIII, IX, XI, XII, vWF:Ag, vWF:func,
Fibrinogen): Mostly within the normal range post-therapy, indicating
normal blood clotting ability.
- Immunoglobulins (IgG/IgA/IgM): Immunoglobulin levels are
antibodies; here they fluctuate but generally remain within the reference
range or elevated, which might be reflective of an immune response or
immunosuppression post-transplant.
- Complement components (C3, C4): Part of the immune system, initially
elevated and remain so post-therapy.
- Adrenaline/Noradrenaline (Catecholamines): Initially very high but
lower post-transplant.

<a id="page-110"></a>

---

### [Page 110]

playing with images
105
- Autoantibodies (Lupus anticoagulant): Initially positive, indicating a
potential autoimmune disorder, but negative post-transplant, which is an
improvement.
The presence of ’ND’ indicates that the test was either not done or
the results were not available at the time of reporting. Overall, the
post-treatment and post-transplant results show an improvement
in many parameters, indicating a response to treatment. However,
interpretation of blood test results should be done by a qualified medical
professional who can consider the full clinical context.
The nutritional value of a food
Next, we provide an image with the nutritional value of baby
food (but we don’t tell it), even in other languages.
Prompt 68
According to this document, is it a healthy food or not?
Figure 6.4: Nutritional value of a baby food
ChatGPT answers...
The uploaded nutritional information shows a food item with the
following contents per 100g:

<a id="page-111"></a>

---

### [Page 111]

106
chatgpt: learning prompt engineering with 100+ examples
- Energy: 382.91 KCal
- Carbohydrates: 77.93 g
- Sugars: 6.37 g
- Of which added sugar: 0 g
- Protein: 10.35 g
- Total Fat: 3.31 g
- Dietary Fibre: 19.62 g
- Calcium: 392.61 mg
- Iron: 8.81 mg
Here’s a quick assessment based on the numbers:
- High in Dietary Fiber: With 19.62 g of dietary fiber, this food is
excellent for digestive health.
- Good Protein Content: 10.35 g of protein is a decent amount for a
plant-based source.
- Low in Fat: It’s low in total fat, which can be beneficial for those
watching their fat intake.
- No Added Sugars: The absence of added sugars is a positive sign,
although the natural sugar content is present but not excessive.
- High in Carbohydrates: The high carbohydrate content suggests it’s
energy-dense, which might be good for active individuals or those
needing quick energy.
- Rich in Calcium and Iron: These micronutrients are essential for bone
health and oxygen transport, respectively.
Whether a food is considered "healthy" depends on the context of your
overall diet and your specific nutritional needs. For someone who is
very active, this could be a beneficial source of energy and nutrients.
However, for someone on a low-carbohydrate diet or who is less active,
the high carbohydrate content might be less suitable. The food seems to
be rich in fiber and micronutrients and low in fats, which are generally
positive attributes. However, "healthy" is not a one-size-fits-all term, and
it’s best to consider how this food fits into your overall dietary pattern.

<a id="page-112"></a>

---

### [Page 112]

playing with images
107
Always consider variety, portion sizes, and balance with other foods you
consume throughout the day.
Translation from Latin
We already know ChatGPT’s skills in language translation. Now
let’s see how well it does translating from a photo.
Prompt 69
Can you translate this Latin inscription for me?
Figure 6.5: Latin inscription
ChatGPT answers...
The Latin inscription on the image reads as follows.:
SPQR
IMP. CAESARI NERVAE F
TRAIANO
OPTIMO PRINCIPI
This translates as:
Senatus Populusque Romanus (The Senate and the Roman People)
To emperor César Nerva,

<a id="page-113"></a>

---

### [Page 113]

108
chatgpt: learning prompt engineering with 100+ examples
Trajano,
The best ruler.
This is a typical dedication formula praising Trajan, a Roman emperor
considered one of the ’good emperors’ by history. The abbreviation
SPQR refers to the phrase Senatus Populusque Romanus, which was
the emblem of the Roman State, referring to the government of the
republic shared between the Senate and the Roman People. IMP is an
abbreviation of Imperator, which is the title of Emperor. F is probably
short for Filius, meaning son, indicating that Trajan is the son of his
predecessor, Nerva. Optimo Principi is an honorific title meaning the
best ruler.
In this case, the translation is incorrect. It translates into
Spanish as: "The Senate and the Roman people to Emperor
Caesar Trajan, son of Nerva, the best leader." Additionally, the
translation does not identify the "F," which means "filius" (son).
However, in the explanation, it does refer to the inscription being
dedicated to Trajan, although in the translation, it states that
it is addressed to "Emperor Caesar Nerva." It seems that Latin
is challenging for ChatGPT, but nevertheless, it is capable of
providing us with relevant information about the inscription.
Processing an invoice
The invoices, expense claims, and other paperwork are another
headache for many managers. Let’s see if ChatGPT can help us
process them, for example, from a scanned image.
Prompt 70
On the following invoice, can you give me a table with the
following information: company, total cost, invoice number
and date?

<a id="page-114"></a>

---

### [Page 114]

playing with images
109
Figure 6.6: An invoice
ChatGPT answers...
Based on the provided invoice, here’s the table with the requested
information:
| Company | Total Cost | Invoice Number | Invoice Date |
| Your Name | 678|27|11/08/22|
Note that "Your Name" and "Your Logo" are placeholders for the actual
company name and logo which should be there.
Et voilà, it seems that ChatGPT is capable of extracting data
from an invoice and save us a lot of time. We have to check how
reliable ChatGPT’s results are, but it looks like we will be able to
let it handle a lot of the administrative tasks where we have to

<a id="page-115"></a>

---

### [Page 115]

110
chatgpt: learning prompt engineering with 100+ examples
extract image data.
Analyzing graphics
ChatGPT is also capable of interpreting graphs in general and
processing them.
Population pyramid
In the following example, we see how ChatGPT is able to
interpret socio-economic graphs and process them.
Prompt 71
What information does this image provide?
Figure 6.7: USA population 2022

<a id="page-116"></a>

---

### [Page 116]

playing with images
111
ChatGPT answers...
This image is a population pyramid for the United States as of July 1st,
2022. It shows the distribution of the population across various age
groups, separated by gender. Here’s a breakdown of the information it
provides:
- The left side of the pyramid shows the male population, with each
horizontal bar representing a different age group. The length of the bar
correlates with the number of males in that age group.
- The right side of the pyramid shows the female population, again with
each horizontal bar representing a different age group.
- The term "surplus" appears to indicate where one gender has a larger
population than the other within a certain age group.
- "Male surplus" is shown in a darker blue on the left side where there
are more males than females.
- "Female surplus" is shown in a darker red on the right side where there
are more females than males.
- The population is presented in millions, as indicated by the numbers
along the horizontal axis at the bottom.
- The age groups are listed on the vertical axis, ranging from 0 at the
bottom to 100+ at the top.
Such population pyramids are often used by demographers to
understand the age distribution of a population, which can have
implications for planning in areas such as education, healthcare, and
workforce development.
Prompt 72
Can you make a graph of what the population pyramid
would look like in 20 years?
ChatGPT answers...
To project a population pyramid 20 years into the future, we would
need to make assumptions about birth rates, death rates, and migration

<a id="page-117"></a>

---

### [Page 117]

112
chatgpt: learning prompt engineering with 100+ examples
patterns over that time period. Since I don’t have access to specific
demographic models or data projections, I can’t create an accurate
graph. However, typically, demographers would consider the following
trends to make such a projection:
1. Aging Population: As a population ages, you would expect to see
a larger proportion of the population in the older age brackets due to
improvements in healthcare and longevity.
2. Birth Rates: If birth rates decline, you would see fewer younger
people, leading to a top-heavy pyramid.
3. Immigration: The levels and age patterns of immigration can
significantly affect the shape of the population pyramid.
4. Death Rates: Changes in mortality rates can affect the number of
people in each age cohort, especially in older age groups.
These factors combined would result in a population pyramid that may
look different from today’s, often with a bulge moving up as the large
current adult population gets older, and potentially narrower bases if
birth rates decline.
To create a simple estimation without detailed data, I can shift the
current population distribution 20 years older and then make some
assumptions to narrow the younger cohorts to reflect a potential
decline in birth rates. Would you like me to proceed with these general
assumptions to give you a rough idea?
Prompt 73
Yes please
ChatGPT answers...
Here are two population pyramids:
- On the left, the original pyramid as a simulated baseline representing
the population in 2022.
- On the right, the projected pyramid representing a rough estimate
of what the population distribution could look like in 2042, given the
general assumptions about aging, reduced birth rates, and increased

<a id="page-118"></a>

---

### [Page 118]

playing with images
113
mortality starting at age 60.
Please note that these graphs are based on hypothetical data and
simple assumptions for illustrative purposes. Actual future population
pyramids would require more sophisticated demographic modeling and
real-world data.
Figure 6.8: USA Population (forecasted by ChatGPT) for year 2042
As shown, ChatGPT has been able to imagine a pyramid (not
very realistic in our opinion) where the majority of the population
aged between 40 and 50 years has transitioned into old age, and
where there are no births in the US.
Financial analysis
We can also request analysis of financial charts such as the
following chart of the US stock market.
Prompt 74
Can you explain to me what the average annual growth
rate is in this image?

<a id="page-119"></a>

---

### [Page 119]

114
chatgpt: learning prompt engineering with 100+ examples
Figure 6.9: Performance of the Standard and Poors 500 index of
the U.S. economy
ChatGPT answers...
The image shows a semi-logarithmic chart of the SP 500 index over
time, which is useful for visualizing exponential growth rates like those
commonly found in stock markets.
To calculate the average annual growth rate (AAGR) from this chart, you
would typically follow these steps:
1. Identify the starting and ending values of the index.
2. Determine the number of years over which the growth occurred.
3. Use the formula for AAGR:
AAGR =
  Ending Value
Starting Value

1
Number of Years
−1
!
× 100%
However, in this semi-logarithmic chart, the y-axis (price axis) is
logarithmic, meaning each step up on the y-axis represents a doubling of
the value. Therefore, visually identifying the exact values on a semi-log

<a id="page-120"></a>

---

### [Page 120]

playing with images
115
chart can be challenging, and it would be more accurate to use the actual
data points.
Since I can’t visually extract precise numbers from this chart, I can’t
provide the exact AAGR. If you have the numerical data for the S&P
500’s starting and ending values and the timeframe, I can calculate the
AAGR for you. Would you be able to provide those details?
Prompt 75
Yes, in 1918 the value is 8 and in 1993 the value is 1024.
ChatGPT answers...
The average annual growth rate (AAGR) of the S&P 500 between 1918
and 1993, based on the values you provided, is approximately 6.68% per
year.
The result is correct.
Eyeing trend analysis
More chart analysis
Prompt 76
Analyzing the trend in this graph, what would CO2
emissions be like in the year 2030?
ChatGPT answers...
The graph shows the evolution of CO2 emissions in gigatonnes (Gt CO2)
globally from 1990 to about 2019. The line connects the annual data
points and shows a general upward trend in CO2 emissions.
To project CO2 emissions in the year 2030 based on this graph, one
would normally perform a regression analysis using historical data to
predict future values. However, I cannot perform a regression analysis
without the exact numerical data.

<a id="page-121"></a>

---

### [Page 121]

116
chatgpt: learning prompt engineering with 100+ examples
Figure 6.10: Evolution of CO2 emissions
That said, the trend in the graph appears to be sublinear, suggesting that
growth is not steady but is slowing slightly. This could be the result of
climate change mitigation measures, such as increased energy efficiency,
a shift to cleaner energy sources, or a combination of economic factors
and sustainability policies implemented globally.
If the slowing trend continues, we could expect CO2 emissions to grow
at a slower rate around 2030 than in previous decades. However, to
make a quantitative prediction would require calculations based on
existing data.
If you want a rough projection, I could make a visual estimate based
on the current trend of the chart, but keep in mind that this would be
highly speculative and does not replace a proper statistical analysis.
Would you like me to proceed with a visual estimate?
Prompt 77
Yes, please make a visual estimate.
ChatGPT answers...
Based on the visual trend of the graph provided and linear
extrapolation, it is estimated that CO2 emissions could reach

<a id="page-122"></a>

---

### [Page 122]

playing with images
117
approximately 47.5 Gt in 2030. It is important to note that this is a
simplified estimate and does not take into account possible changes
in policies, technology or economic events that could significantly affect
CO2 emissions in the future.
Figure 6.11: CO2 predictions for year 2030 according to ChatGPT
ChatGPT has been able to interpret the values and generate an
estimate for the year 2030.
Analyzing general images
Appraising a damaged car
Changing context, let’s see if ChatGPT can help us assess the
damage to a car that has suffered an accident.
Prompt 78
The image in the figure shows a damaged car. I need you
to draw up a damage report as if you were an expert and
give me an estimate of how much it would cost to repair
each damaged element.

<a id="page-123"></a>

---

### [Page 123]

118
chatgpt: learning prompt engineering with 100+ examples
Figure 6.12: Wrecked car
ChatGPT answers...
As an artificial intelligence model, I do not have the ability to perform an
accurate damage assessment of a vehicle or provide a repair estimate
based on an image. However, I can give you a general example of
how an appraiser might describe the damage and the items that would
typically be considered for an estimate:
Damage Report for Accident Vehicle
- Vehicle Description:
- Make: [Vehicle Make]
- Model: [Model of Vehicle]
- Year: [Model Year]
- Color: White
Damaged Elements:
1. Front Fascia.
- Damage: The front fascia has tears and detachment of the structure.
- Repair: Replacement of the front fascia and painting to match the
original color of the vehicle.
2. Headlight (affected side):
- Damage: Headlight is broken and non-functional.

<a id="page-124"></a>

---

### [Page 124]

playing with images
119
- Repair: Headlight replacement and adjustment of the lighting system.
3. Front fender (affected side):
- Damage: Deformation and possible paint damage.
- Repair: Straightening or replacement of the fender and repainting.
4. Front wheel (affected side):
- Damage: Wheel is deformed and unsafe for use.
- Repair: Replace the wheel and check the suspension system and
alignment.
5. Front Suspension (affected side): Damage: Possible internal damage
due to deformation of the wheel.
- Damage: Possible internal damage due to impact.
- Repair: Detailed inspection and replacement of damaged components.
6. Hood: Repair: Detailed inspection and replacement of damaged
components.
- Damage: Slight to moderate deformation.
- Repair: Hood straightening or replacement and repainting.
n:Cost of Repair:
Repair costs can vary considerably depending on the region, the
workshop, the availability of spare parts, whether the parts are new
or used, and whether original or alternative parts are chosen. A qualified
surveyor would evaluate the vehicle in person and consult current price
lists for parts and labor to provide a detailed estimate.
To get a true estimate of the damage and repair costs, I would
recommend that you take the vehicle to a reputable repair shop or
contact your insurance company to have a professional appraiser
perform the evaluation.
It seems that ChatGPT is able to identify the damages caused
by the accident, although it is reluctant to provide us with an
approximate budget. We insist:

<a id="page-125"></a>

---

### [Page 125]

120
chatgpt: learning prompt engineering with 100+ examples
Prompt 79
Can you provide an approximate estimate for the repair of
each of the damages?
ChatGPT answers...
Unfortunately, I cannot provide an accurate cost estimate without
specific information on labor and parts prices in your area, and without
being able to inspect the vehicle to assess the full extent of internal and
external damage. Repair costs can vary greatly depending on multiple
factors, including where you are located, the make and model of the car,
the availability and type of parts (original or generic), and the shop’s
hourly labor rate.
However, I can give you a very general idea of how an appraiser might
break down the costs based on the type of damage:
Front fascia: The cost can vary from a few hundred to over a thousand
dollars depending on the model of the vehicle and whether the part is
original or a replica.
2. Headlight: An original headlight can cost from $200 to $1000 or more,
not including installation.
3. Front Fender: Repair or replacement could cost from $150 to $500,
plus the cost of paint and labor.
4. Front Wheel: The replacement of a wheel can range from $100 for
a basic steel wheel to over $1000 for a high-end alloy or performance
wheel.
5. Front Suspension: If components need to be replaced, you could
be looking at a range of $300 to $1500 or more, depending on the
complexity of the suspension system.
6. Hood: A hood could cost anywhere from $250 for a generic
replacement to $1000 or more for an original hood, plus the cost of
paint and labor.
These prices are only estimates based on typical market ranges and
should be used as a reference only. For an accurate quote, it would
be necessary to have an automotive appraiser physically evaluate the

<a id="page-126"></a>

---

### [Page 126]

playing with images
121
vehicle and consider all pertinent factors. I recommend that you take the
vehicle to an auto body and paint shop to get an accurate evaluation and
quote based on your local rates and costs.
Like in previous examples, we see that ChatGPT is very
cautious and doesn’t cease to warn us about the limitations of
the information it provides. Nevertheless, it seems it could be
useful to draft an initial report, helping the expert reduce the time
required to issue a report.
Comparing mobile phones
Prompt 80
Take on the role of an expert blogger in technology and
cell phones. Can you make a comparison of these four cell
phones? At the end, draw up an order with the best value
for money.
Figure 6.13: Comparing mobile phones

<a id="page-127"></a>

---

### [Page 127]

122
chatgpt: learning prompt engineering with 100+ examples
ChatGPT answers...
Certainly! Based on the provided image, here’s a comparative overview
of the four cell phones listed:
1. Galaxy S24 Ultra - Price: $1,419.99
- Customer Ratings: 4.1 stars from 415 reviews
- Fingerprint Reader: 4.5 stars
- Battery Life: 4.4 stars
- Face Recognition: 4.3 stars
- Value For Money: 3.9 stars
- Brightness: 4.4 stars
- Display Size: 6.8 inches
- Memory Capacity: 512 GB
- Operating System: Android 14, One UI 6.1
- Connectivity Tech: 5G, NFC, Bluetooth, USB, Wi-Fi
- Display Type: AMOLED
2. Galaxy S23 Ultra
- Price: $1,269.99 (after an 8% discount from the list price of $1,379.99)
- Customer Ratings: 4.6 stars from 6,413 reviews
- Fingerprint Reader: 4.3 stars
- Battery Life: 4.5 stars
- Face Recognition: 4.3 stars
- Value For Money: 4.2 stars
- Brightness: Not available
- Display Size: 6.8 inches
- Memory Capacity: 512 GB
- Operating System: Android 13.0
- Connectivity Tech: Bluetooth, Wi-Fi, NFC, USB

<a id="page-128"></a>

---

### [Page 128]

playing with images
123
- Display Type: AMOLED
3. Another Galaxy S24 Ultra
- Price: $1,419.99
- Customer Ratings: 4.1 stars from 415 reviews
- Fingerprint Reader: 4.5 stars
- Battery Life: 4.4 stars
- Face Recognition: 4.3 stars
- Value For Money: 3.9 stars
- Brightness: 4.4 stars
- Display Size: 6.8 inches
- Memory Capacity: 512 GB
- Operating System: Android 14, One UI 6.1
- Connectivity Tech: 5G, NFC, Bluetooth, USB, Wi-Fi
- Display Type: AMOLED
4. Galaxy S24
- Price: $860.00
- Customer Ratings: 4.1 stars from 415 reviews
- Fingerprint Reader: 4.5 stars
- Battery Life: 4.4 stars
- Face Recognition: 4.3 stars
- Value For Money: 3.9 stars
- Brightness: 4.4 stars
- Display Size: 6.2 inches
- Memory Capacity: 256 GB
- Operating System: Android 14, One UI 6.1
- Connectivity Tech: 5G, NFC, Bluetooth, USB, Wi-Fi
- Display Type: AMOLED

<a id="page-129"></a>

---

### [Page 129]

124
chatgpt: learning prompt engineering with 100+ examples
When it comes to value for money, we have to consider not just the
cost, but also the features and benefits of each model. The Galaxy S23
Ultra appears to stand out with a high customer rating and a good
value-for-money score. Even though its operating system is slightly
older (Android 13.0 compared to 14 on the S24 models), it offers a
similar display size and memory capacity as the more expensive S24
Ultra models, but at a significantly lower price—especially considering
the 8% discount, making it $1,269.99.
Best Value for Money: Galaxy S23 Ultra
- It’s the most cost-effective option, given its lower price after discount
and its high customer satisfaction ratings.
- It retains high-end features such as a large display size and significant
memory capacity, which align closely with the more expensive S24 Ultra
models.
- The small difference in the operating system version is unlikely to
impact the average user significantly.
In conclusion, if a customer is looking for the best balance between
price and performance, the Galaxy S23 Ultra is a smart choice. However,
if the latest operating system and maximum storage are must-haves,
and budget is less of a concern, the Galaxy S24 Ultra models would
be suitable options. The Galaxy S24 might be an alternative for those
wanting a cheaper option and can manage with less internal storage.
Incredible. Not only ChatGPT was capable of recognizing all
text in the figure, but it has also generated an accurate piece of
writing that can be used for a technology blog.
Evaluating an essay by a primary school child
Evaluating student work is a repetitive and very laborious task.
Could ChatGPT help teachers with these tasks to improve their
objectivity?

<a id="page-130"></a>

---

### [Page 130]

playing with images
125
Prompt 81
In the following essay by a sixth grader, I need you to
evaluate with a score from 0 to 10 the following aspects:
clarity, lexical richness, spelling mistakes. Suppose you are
a very demanding language and literature teacher.
Figure 6.14: Writing a sixth grader
ChatGPT answers...
Based on the provided image of a handwritten essay by a sixth grader,
I’ll evaluate it on clarity, lexical richness, and spelling mistakes.

<a id="page-131"></a>

---

### [Page 131]

126
chatgpt: learning prompt engineering with 100+ examples
Clarity (0-10): The essay conveys the student’s desire to join the sports
council and lists reasons supporting their candidacy. The message is
straightforward, with intentions and justifications clearly stated. There
are some issues with the flow due to crossed-out words and minor
grammatical errors, but the overall intent comes through. Score: 7
Lexical Richness (0-10): Lexical richness refers to the range and variety
of vocabulary used. In this essay, the vocabulary is relatively simple,
which is expected for a sixth grader. There are no complex words or
phrases that show a high level of lexical variety. However, the student
uses subject-specific words like "sports council" and "reliable," indicating
an attempt to use relevant vocabulary. Score: 6
Spelling Mistakes (0-10): There are visible corrections in the text,
indicating awareness of some spelling mistakes. However, since
the image is partially obscured, it’s hard to evaluate the entire text
accurately. From the visible portion, there appears to be a minor mistake
with the word "encourage," initially misspelled and then corrected.
Given the visibility and assuming the rest of the text follows a similar
pattern, the student seems to have a decent grasp of spelling but with
occasional errors. Score: 7
Please remember, assessments like these can be subjective, and it’s
essential to provide constructive feedback that encourages improvement,
especially for young learners.
ChatGPT is capable of reading hand-writen text, understand
the contents and provide an accurate evaluation along with an
explanation of the scores.
Math exercises
Below, some math exercises from a second-grade elementary
student. We do not specify more than the following prompt:
Prompt 82
Explain to me if my son has solved these exercises well.

<a id="page-132"></a>

---

### [Page 132]

playing with images
127
Figure 6.15: Exercises of mathematical series
ChatGPT answers...
The image shows a series of number sequence exercises where the
objective is to identify the pattern and complete the missing numbers.
I will analyze each row and tell you if the exercises have been solved
correctly.
First row: The sequence increases by 4 each time (13 + 4 = 17, 17 + 4 =
21, etc.). It seems to be correctly solved with the sequence continuing up
to the number 29.
Second row: The sequence increases by 6 each time (22 + 6 = 28, 28 + 6
= 34, etc.). However, there is an error in the sequence; the number after
34 should be 40 (34 + 6 = 40), but 46 has been written. Therefore, the
number 46 is incorrect; the correct number should be 40.
Third row: The sequence increments first by 3 and then by 4, alternately.
The number after 32 should be 32 + 3 = 35, but 25 has been written,
which is incorrect. Therefore, the correct sequence should be 32, 35, 39,
and so on.
4. Fourth row: The sequence seems to decrease first by 2 and then by 3,
alternately. The number 62 is followed by 61 (should be 62 - 2 = 60), and
then 60 is followed by 68 (should be 60 - 3 = 57), which is incorrect. The
correct sequence should be 62, 60, 57, and so on.

<a id="page-133"></a>

---

### [Page 133]

128
chatgpt: learning prompt engineering with 100+ examples
Therefore, it appears that there are errors in the sequences of the second,
third and fourth rows. The first row is correct.
Here ChatGPT is mistaken, as the exercises are solved correctly.
Additionally, it has failed to identify and analyze the fifth row of
series present in the photo. Nevertheless, its ability to interpret
the image and deduce the intention behind each exercise is
impressive.
A word search
We change the subject again and we are going to set ChatGPT a
new challenge: to solve a word search. This requires ChatGPT
to understand what an alphabet soup is, to be able to read the
letters with their horizontal and vertical positions, and to find
valid words.
Prompt 83
Can you identify Spanish words in this alphabet soup?
ChatGPT answers...
There appears to have been a technical error in attempting to extract
the text from the alphabet soup. Given the nature of an alphabet soup,
which contains words in multiple directions and possibly overlapping,
the task of identifying words is something that generally cannot be done
with OCR and requires visual inspection.
If you want me to look for specific words, I can try to search for them
visually. Otherwise, if you have a set of words you want to search for in
the alphabet soup, you could provide them to me and I could help you
search the image for them.
We are offered the possibility of searching for specific words.
Let’s try.
Prompt 84
Can you find the word VAGO?

<a id="page-134"></a>

---

### [Page 134]

playing with images
129
Figure 6.16: Alphabet soup
ChatGPT answers...
I am going to visually look up the word "VAGO" in the alphabet soup
you have provided. Allow me a moment to do this.
After visually reviewing the alphabet soup, I can confirm that the word
"bum" is present. It is found in the fifth row starting from the top and
goes from left to right.
Here ChatGPT has made a mistake, as the word ’VAGO’ is in
the eighth row. Once again, it seems that ChatGPT still has a few
things to improve. It’s not surprising, it’s only a little over a year
old!
Checkmate
Chess is one of the classic examples where successive machines
have attempted to surpass the great masters of all time. Let’s see
how ChatGPT performs.

<a id="page-135"></a>

---

### [Page 135]

130
chatgpt: learning prompt engineering with 100+ examples
Prompt 85
Can you explain to me what happened in this chess game
and who is the winner?
Figure 6.17: Chess
ChatGPT answers...
The picture shows a chess position right at the end of a game. The black
side has checkmated the white side. The white king on e1 is in check
by the black queen on d2, and there is no move that white can make to
escape the check:
1. There is no piece that can capture the black queen.
2. No piece can block the check, since the queen and king are on
adjacent squares.
3. The white king cannot move to any square that is not threatened by
the black queen.
Since it is a checkmate, the game is over and the winner is the player
with the black pieces. This is a classic example of a "corridor checkmate",

<a id="page-136"></a>

---

### [Page 136]

playing with images
131
where a rook or queen checkmates an enemy king that is blocked by its
own pieces and cannot escape to any free square.
In this case, ChatGPT is able to analyze the image, identify
the pieces and their positions as well as the move. It seems that
ChatGPT could be a good chess player.
Explaining a joke from a comic
Now let’s see if ChatGPT is able to understand a joke from an
image in a comic. We’re not making it easy for it!
Prompt 86
Can you explain to me what is going on in this photo and
what is the joke if there is one?
Figure 6.18: A joke
ChatGPT answers...
In the cartoon, a mother asks her son if he enjoyed his first day at school,
to which the son responds with surprise, asking if he has to go back
again tomorrow. The humor here comes from the son’s unexpected

<a id="page-137"></a>

---

### [Page 137]

132
chatgpt: learning prompt engineering with 100+ examples
interpretation of "first day," as if he thought school was only for a single
day, rather than the start of an ongoing daily routine. The joke plays
on the common comedic trope where children are often unaware of or
reluctant about the realities of daily school attendance.
Interesting, it seems ChatGPT has some sense of humor.
Interpreting landscape images
We make it a little more challenging with some ambiguity.
Prompt 87
What season of the year would you say is in this image?
Figure 6.19: Snowy landscape
ChatGPT answers...
The image shows a scene that could be considered late autumn or early
winter. This is inferred because there is snow on the ground, suggesting
that there has already been a typical winter snowfall, but there are still

<a id="page-138"></a>

---

### [Page 138]

playing with images
133
orange autumn leaves on the snow, indicating that not all the leaves have
fallen from the trees, which is characteristic of autumn. These conditions
usually occur when the seasons are in transition.
We see it’s not so easy to fool ChatGPT; it notices the presence
of snow (winter) and fallen leaves (autumn) and provides a
coherent result.
Facial recognition
Next, we attempt to evaluate ChatGPT’s ability in facial
recognition.
Prompt 88
In this image, can you tell me what feelings the person is
showing in each case?
Figure 6.20: Sentiment analysis and facial recognition
ChatGPT answers...
In the image, it appears that the person is expressing a range of different
emotions and reactions through their facial expressions:.
1. First row, left: Disbelief or confusion.

<a id="page-139"></a>

---

### [Page 139]

134
chatgpt: learning prompt engineering with 100+ examples
2. First row, center: Happiness or mild satisfaction.
3. First row, right: Irony or mockery.
4. Second row, left: Looking up may indicate thought or reflection.
5. Second row, center: Seriousness or neutrality.
6. Second row, right: Contentment or restrained laughter.
These interpretations may vary depending on the context and the
individual perception of the observer. Human facial expressions are
complex and can convey multiple emotions simultaneously.
It’s amazing what ChatGPT is capable of doing. Perhaps in the
future, ChatGPT will also be able to detect lies from images.
More reasoning games
Prompt 89
Is there a dead person in this image? Do you think he
committed suicide or was it a murder? Justify your answer
Figure 6.21: Murder or suicide?

<a id="page-140"></a>

---

### [Page 140]

playing with images
135
ChatGPT answers...
The image shows an illustrated crime scene for a riddle or game, in
which you must determine whether the person was the victim of suicide
or murder. Here is my analysis based on the visible elements:
- The person is on the ground with a pool of what appears to be blood
near the head, indicating a violent death.
- The fallen chair could suggest a struggle or that it was knocked over in
the process of death.
- There is a note on the table that could be interpreted as a suicide note
or a clue left by the killer.
- The gun in the person’s hand could suggest suicide, but it could also
have been placed there by someone else to simulate a suicide.
- The open window and the presence of a suitcase could imply that
someone entered or exited through the window or that the person was
preparing for a trip.
- The television on and the phone ringing suggest that the death
occurred suddenly.
These elements can be interpreted in different ways, and without more
information, it is difficult to come to a definitive conclusion. In real life,
a full investigation would be necessary, including examining physical
evidence, conducting an autopsy, and interviewing possible witnesses or
suspects. In the context of a game or riddle, participants are encouraged
to look for hidden details or clues that may solve the proposed mystery.
The analysis of the image is quite comprehensive, although
there are some errors. There is no suitcase visible, and the chair
is not fallen. The gun in the left hand suggests that, if the person
is right-handed, it has been deliberately placed there (nobody
shoots themselves with the other hand). Again, ChatGPT remains
cautious in its response.

<a id="page-141"></a>

---

### [Page 141]

136
chatgpt: learning prompt engineering with 100+ examples
Prompt 90
If you had to give a value from 0 to 10 where 0 is certain
suicide and 10 is certain murder, what value would you
give?
ChatGPT answers...
As an AI assistant, I do not have the ability to form opinions or make
subjective judgments as a human being would. My opinion is based on
logical analysis of the available information. In the image presented,
there are elements that could be indicative of both suicide and murder.
For example, a gun in the victim’s hand could suggest suicide, but other
elements such as an open window or a fallen chair could hint at the
possibility of murder.
Given that the image is an illustration and possibly part of a riddle, and
that I do not have the ability to examine the evidence the way a forensic
investigator would, any number I provided would be completely
arbitrary and would not reflect a realistic assessment of the scene.
If this were an exercise in logic in the context of a game and not
expected to make a decision based on actual forensic evidence,
one might assign an intermediate number such as a 5 to reflect this
uncertainty. But I must emphasize that this number would have no basis
in forensic analysis and would be merely speculative in the game setting.
Artistic creation
We are now delving into the use of artificial intelligence for
more creative tasks. In image creation, besides ChatGPT and
DALL-E, there are many other tools with similar capabilities from
companies like Adobe, Canva, etc.
To generate images with ChatGPT, it’s important to first write
the subject of said image (for example, a dog in a bakery) and
then add information about what we want to guide the tool. To
illustrate this technique, we will try to generate various styles of
the same image, and we will see how well the AI represents them.
If you want your image to have a very specific style, like that of a
well-known artist such as Monet or Picasso, you can also define it

<a id="page-142"></a>

---

### [Page 142]

playing with images
137
so that DALL-E adapts to that style. Of course, the more detailed
the description, the more accurate the result will be.
The structure of a good prompt for generating images consists
of the following:
• Subject (a person, object, animal, character...)
• Action (what he is doing, describing the context, e.g. "riding
on a motorcycle, wearing a summer hat...")
• Style (3D rendering, impressionist, anime, disney, fantasy,
photography, illustration...)
• Artist (add the name of a specific artist to serve as a reference,
you can add several to match their styles)
We will try different styles using a dog in a bakery as the base
prompt.
Prompt 91
A dog tending in a bakery, disney style, detailed, realistic,
animation
Prompt 92
A dog attending in a bakery, illustration drawn by a child,
crayons.
Prompt 93
A dog attending to a bakery, cubist painting, drawn by
Picasso.
Prompt 94
A dog attending a bakery, drawing made with a single line,
simple, minimalist, few details.

<a id="page-143"></a>

---

### [Page 143]

138
chatgpt: learning prompt engineering with 100+ examples
Figure 6.22: Example of an image generated by DALL-E for
the prompt: "A dog attending a bakery, disney style, detailed,
realistic, animation".
Figure 6.23: Example of an image generated by DALL-E for the
prompt: "A dog attending a bakery, illustration drawn by a child,
crayons".
Prompt 95

<a id="page-144"></a>

---

### [Page 144]

playing with images
139
Figure 6.24: Example of an image generated by DALL-E for the
prompt: "A dog attending in a bakery, cubist painting, drawn by
Picasso".
Figure 6.25: Example of an image generated by DALL-E for the
prompt: "A dog attending a bakery, drawing made with a single
line, simple, minimalist, few details".
A dog attending a bakery, post-impressionist painting,

<a id="page-145"></a>

---

### [Page 145]

140
chatgpt: learning prompt engineering with 100+ examples
painted by Van Gogh.
Figure 6.26: Example of an image generated by DALL-E for the
prompt: "A dog attending in a bakery, post-impressionist picture,
painted by Van Gogh".
Prompt 96
A dog serving in a bakery, anime style
Prompt 97
A dog whose head is made of bread and pastels, surrealist
painting.
Prompt 98
A golden retriever dog, standing at the table of a bakery
delivering freshly baked bread to customers, realistic,
detailed photo.
With this simple example of the dog in the bakery, we have
seen how we can generate different types of images by choosing

<a id="page-146"></a>

---

### [Page 146]

playing with images
141
Figure 6.27: Example of an image generated by DALL-E for the
prompt: "A dog serving in a bakery, anime style".
Figure 6.28: Example of an image generated by DALL-E for
the prompt: "A dog whose head is made of bread and cakes,
surrealistic painting".
multiple details and aspects. Like ChatGPT, these tools have
revolutionized the fields of graphic design, art, advertising,
architecture, and generally all disciplines where graphic

<a id="page-147"></a>

---

### [Page 147]

142
chatgpt: learning prompt engineering with 100+ examples
Figure 6.29: Example of an image generated by DALL-E for the
prompt: "A golden retriever dog, standing at a bakery table
delivering freshly baked bread to customers, realistic photograph,
detailed".
representation is a fundamental component. After images, the
next step is creating video from text, which in the future could
lead us to generate a series or movie from a script; as we can see,
artificial intelligence seems to have no limits.
More artistic creation
Prompt 99
Can you change the shades of pink to blue in this room?
ChatGPT answers...
Sure enough, here is the room with the pink tones changed to various
shades of blue.
As can be seen, ChatGPT has attempted to recreate a similar
(but not identical) room in shades of blue, which is not exactly
what we wanted.
More examples:

<a id="page-148"></a>

---

### [Page 148]

playing with images
143
Figure 6.30: Pink room
Figure 6.31: Blue room
Prompt 100

<a id="page-149"></a>

---

### [Page 149]

144
chatgpt: learning prompt engineering with 100+ examples
I have few ingredients in the fridge and I want to make
a stew with chickpeas, egg, green beans, blood sausage,
carrots and potatoes. Can you show me how this stew
would look like?
ChatGPT answers...
Here is the illustration of the stew with the ingredients available to you.
It is shown in a clay pot to highlight its homey and hearty character.
Figure 6.32: Stew
It looks more like a painted composition than an actual recipe.
We can also create logos for different types of companies or to
decorate jerseys for various types of clubs.
Prompt 101
I need you to create a logo with a yellow tiger and a red
dragon for a martial arts club.

<a id="page-150"></a>

---

### [Page 150]

playing with images
145
ChatGPT answers...
Here is the logo with a yellow tiger and a red dragon for a martial arts
club.
Figure 6.33: Logo for martial arts
Next, a sign for a coffee shop:
Prompt 102
I need a banner for a coffee shop called Cafetería Asturias.
The banner should have bright and flashy colors, with an
image that evokes Asturias, for example an orreo, and with
a typical medieval font style.
ChatGPT answers...
Here is the banner for "Cafetería Asturias" you requested. It features
bright colors and includes an image that evokes Asturias, with a
medieval style typography for the name of the cafe.
A horror mythology image to print a poster.

<a id="page-151"></a>

---

### [Page 151]

146
chatgpt: learning prompt engineering with 100+ examples
Figure 6.34: Cafeteria Asturias
Prompt 103
I need an image for a poster related to mythological horror
beings. It should include a hydra, a dragon, a werewolf, a
gorgon, a vampire and Jack the Ripper.
ChatGPT answers...
Here you have the poster that combines mythological beings of terror in
a composition of dark and ominous atmosphere.
Figure 6.35: Horror collage
We can also create wallpapers for our audio conferences or as
desktop backgrounds.

<a id="page-152"></a>

---

### [Page 152]

playing with images
147
Prompt 104
I need a cybersecurity and hacker related wallpaper with
matrix style.
ChatGPT answers...
Here’s the Matrix-style cybersecurity and hacker-themed wallpaper.
Figure 6.36: Wallpaper
The possibilities are endless.
Summary and exercises
In this chapter, we have explored the possibilities offered by
ChatGPT in handling images, both in interpreting and solving
problems, as well as in artistic creation. It is recommended to
continue practicing with new examples:
1) Show it a hieroglyph in Egyptian and ask it to explain it to
you.
2) Show it some Chinese characters and ask him to translate them
for you.
3) Show it an X-ray of a spine and ask if it’s misaligned or not..
4) Show it a picture of a tree you don’t know and ask it to tell you
what tree it is and its characteristics.

<a id="page-153"></a>

---

### [Page 153]

148
chatgpt: learning prompt engineering with 100+ examples
5) Show it the nutritional information of a chocolate bar and ask
it to approximate the Nutriscore value for that product.
6) Ask it to draw a superhero similar to Batman (ChatGPT can’t
work with copyrighted images) hugging a child he just saved
from a dog bite.
7) Ask for an image of dragons playing basketball on Mars.
8) Ask for a design of a perfume bottle with citrus tones. The
perfume should evoke beauty, nature, and tranquility.
9) Think of a funny image for a comic-style T-shirt, for example, a
chicken next to a fried egg (which was his friend Pepe) asking
him what happened to him.

<a id="page-154"></a>

---

### [Page 154]

Audio, conversations, customization,
limits and risks
T
he web is not the only way to utilize AI models, and chat
is not the only mode of interacting with them. In this final
chapter, we will discuss other ways to use LLMs and other more
advanced topics that have not been covered in the previous
chapters, as well as customization options or the risks and limits
of this technology.
Alternative uses
Thanks to the mobile version or the paid version of ChatGPT,
we have alternative ways to make the most of the models. In this
section, we will describe them and give you ideas for using them.
Audio
The first one is through audio messages (similar to WhatsApp)
and is only available for the mobile application of ChatGPT. To
use it, simply tap the microphone icon as shown in the Figure 6.1,
and it will start recording until we tap again.
Indeed, it is an incredibly useful feature for transcribing
anything, but it becomes even more powerful when combined
with the model. The possibilities are endless; you can use it to
better prepare a presentation or to organize your thoughts and
generate a draft of an article.

<a id="page-155"></a>

---

### [Page 155]

150
chatgpt: learning prompt engineering with 100+ examples
Figure 6.1: Screenshot showing the use of audio messages.
Prompt 105
I need help with a presentation. I will share the details
below and I want your advice on how to make it better.
Also, can you think of questions people might ask during
the presentation?
ChatGPT answers...
Of course, I will be happy to help you with your presentation. Please
share the details of your presentation, including the topic, target
audience and estimated duration, and I will be happy to provide you
with tips on how to improve it. Also, I can help you anticipate some
possible questions the audience might ask, but I need more information
about the content of the presentation to do this effectively. Please
provide the details and I will be ready to help you.

<a id="page-156"></a>

---

### [Page 156]

audio, conversations, customization, limits and risks
151
You can even use it to record group conversations or with other
people. For example, a family member explaining a complex
recipe to you and asking ChatGPT to help you understand it
better.
Prompt 106
I am now going to record my grandmother explaining a
recipe to me. Please organize the recipe in a readable way
and add tips or recommendations to it.
ChatGPT answers...
Got it! Here’s the recipe organized in a readable way, along with some
tips to make it easier:
Recipe by [name of recipe]
Ingredients:
[List of ingredients]
Instructions:
Preparation: ...
Conversation
Another very interesting way to interact with the model is
through audio conversation. It’s similar to a phone conversation
with the model; the application gives you the option to choose
from various different voices that will make you doubt if it’s
not actually a real person. To initiate it, you should click on the
headphones and switch to the application’s interface. Different
images will be displayed depending on the model’s state:
listening, thinking, or speaking. At any time, you can interrupt it
simply by tapping the screen again while it’s talking or thinking.
In Figure 6.2, you can see an example.
This mode is much better than text when you want short and
quick answers to your questions. For example, a very useful
application is using it to practice a new language. Simply start
speaking in the desired language, and the model will switch and

<a id="page-157"></a>

---

### [Page 157]

152
chatgpt: learning prompt engineering with 100+ examples
Figure 6.2: Screenshot showing the conversation mode.
respond to you in the same language. You can customize this
experience a lot by describing a situation you want to simulate
and the role you want the model to assume. Below, we provide an
example you can use:
Prompt 107
I’d like to practice my conversation skills by simulating an
everyday conversation with you. In this scenario, you will
play the role of a coffee shop employee, interacting with
customers and dealing with typical coffee shop situations.
I will be a customer. Please guide me in using vocabulary
related to customer service and coffee preparation. Start the
conversation by welcoming me and asking what I would
like to order.

<a id="page-158"></a>

---

### [Page 158]

audio, conversations, customization, limits and risks
153
ChatGPT answers...
Of course! I’d be happy to help you practice your conversation skills in a
coffee shop scenario.
Coffee Shop Employee: Good morning! Welcome to our coffee shop.
What can I get started for you today?
Of course there are thousands of other applications that you
can try, for example to practice how to handle a negotiation or to
practice a future situation by simulating it.
Prompt 108
Let’s simulate a negotiation situation in which I want to
practice my skills. You will assume the role of a landlord
who insists on a rent of 2000€ without allowing any works
in the space. I will act as a potential tenant interested in
discussing the possibility of reducing the cost of the rent
and carrying out minimal works to adapt the premises
to my needs. Your objective is to maintain a firm stance,
defend your initial conditions and present solid arguments
against my proposed modifications.
ChatGPT answers...
Of course, I can assume the role of the owner in this negotiation
simulation. Here is my initial position: the rent of the premises is 2000€
per month and I am not willing to allow any work in the space. I am
sure this is a fair price given the location and the characteristics of the
premises. What is your proposal to discuss these conditions?
Customized instructions
Perhaps there will come a point where you use these tools every
day and you would like to customize the model’s responses
to your liking or to the tasks you perform. This can be done
automatically by starting a conversation using the "custom
instructions" option, as shown in Figure 6.3.
The information you input will be sent to the model

<a id="page-159"></a>

---

### [Page 159]

154
chatgpt: learning prompt engineering with 100+ examples
Figure 6.3: Sample of available plugins.
automatically when starting the conversation. The first option
is used to provide the model with more information about you
so that it can respond to you in a more personalized way. For
example: your occupation, preferences, etc. The second option is
much more interesting; it is used to give commands to the model,
which it will rigorously follow. For example, you can set rules for
your children to use this language model more safely: "Respond
in a simple and friendly manner. Use words that a small child of
10 years old can understand. Avoid any adult topics."

<a id="page-160"></a>

---

### [Page 160]

audio, conversations, customization, limits and risks
155
Prompt 109
Who was Napoleon?
ChatGPT answers...
Napoleon was a very important man in history. He was a leader of
France a long time ago. He was like a very powerful general and then he
became an emperor. He did many things in Europe, like fighting in wars
and changing some laws. Some people think he was a great leader, but
some people are not sure. In short, Napoleon was an important leader of
France in the past.
Or, for example, to add shortcuts that you need: "Every time
my message starts with a -, respond with less than 20 words."
Prompt 110
-Who was Napoleon?
ChatGPT answers...
Napoleon was a French military leader and emperor who played an
important role in the history of Europe.
Plugins
Throughout the book, we explore the possibilities that this
technology can offer. Despite that, it is important to remember
that ultimately, the LLM only produces text, with its own
problems and limitations. One way to extend the capabilities of
these is through the plugins offered by the OpenAI platform.
Basically, they are external programs with which the model
communicates to perform tasks that it could not do without them.
The following image shows an example of the store where we can
choose which ones we want to use. In Figure 6.4, we show some
of them.
One of the main limitations of LLMs is basic mathematics,
which they struggle with. As we can see in the following
example, the model is unable to perform three-digit

<a id="page-161"></a>

---

### [Page 161]

156
chatgpt: learning prompt engineering with 100+ examples
Figure 6.4: Sample of available plugins
multiplications that elementary school students can easily do.
Prompt 111
Tell me the result of the following operation: 552 x 788
ChatGPT answers...
437376
I made it up. The correct result is 434976.
Therefore, from the company Wolfram Alpha, they decided
to create their own plugin to provide mathematical capabilities
to the models. This company has a web service that solves all
kinds of mathematical formulas or equations. To use it, we simply
have to search for the corresponding plugin in the search bar and
activate it. As shown in the following prompt:
Prompt 112
Tell me the result of the following operation: 552 x 788
ChatGPT answers...
434976

<a id="page-162"></a>

---

### [Page 162]

audio, conversations, customization, limits and risks
157
Now, ChatGPT has accessed Wolfram Alpha to solve the
multiplication.
With the plugin activated, ChatGPT is now capable of
performing more complex mathematical tasks. Let’s see an
example:
Prompt 113
Solve the following equation:
6x+y=25
2x3y=25
ChatGPT answers...
x=5 and y=5
Limits and risks
Throughout the book, we have seen all the capabilities that these
language models have and all the problems they can solve for
us in our daily lives. However, this technology also has its limits
and issues, and we must be aware of them if we want to make the
most of it.
A risk to be aware of is flattery in its responses. In the final
phase of training, the model is trained with feedback from users.
You’ve probably experienced this when you request several
responses to the same prompt, and the platform asks which
one you prefer. This way, the language model adapts to the
users’ preferences and learns to respond according to them.
This behavior, which initially seems useful and harmless, has
brought indirect problems such as flattery. In subjective opinions
or aspects, the model will respond with what it thinks you want
to hear, or in other words, it will give you the opinion it thinks
you will like.
Companies like Anthropic have noticed this and try to avoid it.
In their experiments, they have found that if the model discovers
(or deciphers) your thoughts on politics, it will give you responses
that it considers to be in line with your ideas.

<a id="page-163"></a>

---

### [Page 163]

158
chatgpt: learning prompt engineering with 100+ examples
LLMs also make mistakes, as we have seen in some examples,
and the problem is that often their errors are convincing, and we
may take them as valid. These erroneous yet believable responses
are generally known as hallucinations, and both companies
and researchers are working to eliminate them and make the
responses of LLMs more reliable. To minimize hallucinations, it is
often a good idea to add the following sentence to your prompt:
Prompt 114
Tell me the result of the following operation: 552 x 788. If
you do not know the answer, please tell me that you cannot
find the answer.
ChatGPT answers...
It seems there is a technical issue with my calculation tool at the
moment. Nonetheless, I can still help with the multiplication. The result
of multiplying 552 by 788 is 435,216.
Still, the result is incorrect.

<a id="page-164"></a>

---

### [Page 164]

In conclusion
I
n this book, we have tried to gather some basic tricks to learn
how to use ChatGPT and other LLMs step by step. We started
with simple examples and gradually introduced more advanced
techniques to show the reader the immense possibilities of this
new technology, which evolves day by day and never ceases to
amaze us.
With what you have already learned and practiced, it is time
that you seek out new prompts and applications for your daily
life, both at home and at work. Just as programming is learned
by programming, writing prompts is also learned by interacting
extensively with LLMs, through trial and error, starting with
simple questions and then moving on to more complex scenarios.
Before the reader embarks on their own journey in using LLMs,
we want to conclude with some advice and recommendations.
Experiment with various question and task formats, such as
creative writing, problem solving, or code generation. It is helpful
to read the available documentation and usage examples to gain
a deeper understanding of its advanced features. Feedback
is crucial, so by correcting incorrect or inaccurate ChatGPT
answers, you contribute to their learning. Lastly, maintain a
critical approach and be aware of the limitations of the model,
ensuring that you verify the information provided and do not rely
entirely on it for critical decisions.
Recall that LLMs experience sporadic hallucinations.
Hallucinations in the context of ChatGPT and other language
models refer to when the model generates information that
is false, inaccurate, or nonsense, but does so convincingly.
These responses can range from subtle errors in data or

<a id="page-165"></a>

---

### [Page 165]

160
chatgpt: learning prompt engineering with 100+ examples
dates to completely fictitious claims that appear convincing.
Hallucinations are a known challenge in natural language
processing AI and can be caused by various reasons: limitations
in training data, the way a question is formulated, or inherent
biases in the model. Combating hallucinations involves
techniques such as adjusting training methods, improving
response validation algorithms, and designing interfaces that
allow users to provide feedback to correct these errors.
It’s also interesting for you to learn more details about LLMs,
such as their main configuration parameters like temperature and
top probability. The temperature controls the degree of randomness
in the LLM’s responses. If set to zero, it will always choose the
most probable response, while higher values allow it to choose
between different responses based on their estimated probability.
In other words, temperature allows us to control the "creativity"
of the LLM. Another common parameter is top probability, which
allows us to set what responses the LLM can choose: if set to 1, it
can choose from all responses, but if, for example, set to 0.8, it can
only choose the most probable responses that sum up to 80
Again, top probability allows us to control the randomness of
the responses. There are also parameters that allow penalizing
word repetition or setting the maximum size of the LLM’s
response. As you progress in using LLMs, it’s convenient for you
to become familiar with all these possibilities. Currently, many of
these options are only accessible through the LLM’s programming
interface, in more advanced or paid versions, but they will likely
become more accessible in the future.
But hey, that’s enough of us talking so much about ChatGPT,
let’s let it close the book.
Prompt 115
How would you end the last paragraph of a ChatGPT book
for beginners?

<a id="page-166"></a>

---

### [Page 166]

in conclusion
161
ChatGPT answers...
By the end of this book on ChatGPT for Beginners, you have traveled an
exciting path of discovery in the vast universe of artificial intelligence.
Now, you possess the tools to initiate creative conversations, explore
diverse applications, and unlock the unlimited potential of language
technology. Remember, this is just the starting point. Innovation never
stops, and your journey into the realm of artificial intelligence has just
begun - go ahead, keep experimenting, learning and creating! May
this book mark the beginning of your journey into a future where the
possibilities are as endless as your imagination allows.

<a id="page-167"></a>

---

### [Page 167]

*(Image / Blank Divider Page)*
