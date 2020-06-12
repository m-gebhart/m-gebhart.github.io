---
layout: default
title: Projects
header: PROJECTS
background: "/assets/pictures/a-dystopian-murder-show_bg.png"
---
<div class="content standard">
  {% for project in site.projects %}
  <div class="project-container">
      <a href="{{ project.url }}"><h2 class="project-container title">{{ project.title }}</h2>
	  <p><b>{{ project.genre }} &middot; {{ project.platform }} &middot; {{ project.softwares }}</b></p>
      <img src="/assets/pictures/{{ project.thumbnail }}" class="project-container thumbnail" alt="{{ project.title }}-thumbnail"/>
	  <p class="project-container preview">{{ project.previewText }}</p></a>
  </div>
  {% endfor %}
</div>