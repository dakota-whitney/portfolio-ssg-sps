---
pageTitle: About
navTitle: About
date: 2019-01-01
images:
  - headshot.jpg
---

<section>
  {% include components/about.html %}
</section>

{% for filename in images %}
<img src="/static/img/{{ filename }}" alt="Dakota Whitney" srcset="">
{% endfor %}

[Home](/)
