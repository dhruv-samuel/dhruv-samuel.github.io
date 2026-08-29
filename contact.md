---
layout: default
title: Contact
permalink: /contact/
---
<section class="contact-page">
  <div class="wrap">
    <h1>Let's talk</h1>
    <p>
      The fastest way to reach me is email. I'm open to freelance, internships,
      and full-time roles.
    </p>
    <a class="button large" href="mailto:{{ site.email }}">{{ site.email }}</a>

    <div class="social-links large">
      {% if site.social.artstation != "" %}<a href="{{ site.social.artstation }}" target="_blank" rel="noopener">ArtStation</a>{% endif %}
      {% if site.social.linkedin != "" %}<a href="{{ site.social.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>{% endif %}
      {% if site.social.instagram != "" %}<a href="{{ site.social.instagram }}" target="_blank" rel="noopener">Instagram</a>{% endif %}
      {% if site.social.vimeo != "" %}<a href="{{ site.social.vimeo }}" target="_blank" rel="noopener">Vimeo</a>{% endif %}
      {% if site.social.github != "" %}<a href="{{ site.social.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
    </div>
  </div>
</section>
