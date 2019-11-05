---
layout: layouts/layout.html
pageTitle: Home
tags:
  - nav
navTitle: Home
date: 2010-01-01
permalink: /
images:
  - headshot_1.jpg
---

{% for filename in images %}
<img src="/static/img/{{ filename }}" alt="Dakota Whitney" srcset="">
{% endfor %}

<section>
  {% include components/about.html %}
</section>