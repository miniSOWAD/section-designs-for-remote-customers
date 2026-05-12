<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRla3ZnZnpvN3lpaGtyd3B4ZmcyYTZqYnh0d3A3ZThvazExNGFmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YcGT5ShJa0nCM0/giphy.gif" width="100%" height="480px" alt="Motion Header" style="border-radius: 12px;"/>

  <br/>
  <br/>

  <h1>✨ GSAP Motion Lab ✨</h1>

  <a href="https://your-gsap-portfolio.netlify.app/">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&duration=2500&pause=1000&color=00FFCC&center=true&vCenter=true&width=900&lines=Advanced+ScrollTrigger+Animations;Next.js+%2B+GSAP+Integration;Fluid+Page+Transitions;Creative+Frontend+Development" alt="Typing SVG" />
  </a>

  <br/>

  <p align="center">
    <a href="https://gsap-portfolio.netlify.app/"><b>🌐 Live Showcase</b></a> •
    <a href="#-motion-overview">🧠 Read Overview</a> •
    <a href="#-tech-stack">🏗 Tech Stack</a>
  </p>

  <div align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </div>

  <br/>
</div>

For project inquiries or code access, feel free to reach out!

------------------------------------------------------------------------

# 🧠 Motion Overview

**GSAP Motion Lab** is a curated collection of premium, highly interactive web designs. It explores the boundaries of creative frontend development by combining robust frameworks with industry-leading animation libraries.

The repository serves as both a showcase and a boilerplate for:
-   ✨ Immersive Page Transitions
-   📜 Complex Scroll-Driven Narratives
-   🎨 Dynamic Data Visualizations
-   🖱️ Custom Cursor & Mouse Follower Physics

------------------------------------------------------------------------

# ⚡ Core Animation Features

## 🎬 Animation Capabilities

| Feature | Description |
| :--- | :--- |
| **ScrollTrigger** | Elements animate seamlessly based on scroll position. |
| **Pinning** | Sections lock in place while internal timelines play out. |
| **Parallax** | Multi-layered depth effects on mouse move and scroll. |
| **MorphSVG** | Fluid vector shape transformations. |
| **Text Splitters** | Character, word, and line-level typography animations. |
| **Page Transitions** | Uninterrupted routing with custom entry/exit timelines. |

------------------------------------------------------------------------

# 🧭 Animation Architecture

```mermaid
flowchart LR
User[User Interaction] --> Event[Scroll / Hover / Click]
Event --> State[React State / Ref]
State --> GSAPContext[GSAP Context]
GSAPContext --> Timeline[GSAP Timeline]

Timeline --> ScrollTrigger[ScrollTrigger Instance]
Timeline --> Tween[Individual Tweens]

ScrollTrigger --> DOM[Update DOM Layer]
Tween --> DOM

DOM --> Render[Browser Paint]
