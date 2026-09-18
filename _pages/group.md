---
layout: page
title: group
permalink: /group/
description: Members and friends of my research group.
nav: true
nav_order: 1

# Replace these placeholders with each member's details.
members:
  - name: "Koushik Reddy Parukola"
    role: "Research Assistant (Aug 2026 - Now)"
  - name: "Long Him Cheung"
    role: "Visiting Scholar (Starting on Oct 2026)"

# Replace this placeholder with a friend's details; add more entries as needed.
friends:
  - name: "Bharadwaj Sudarsan"
    role: "(MS student in Sikora group, VT CS)"
  - name: "Mafalda Ramôa"
    role: "(Postdoc in Economou-Barnes group, VT Physics)"
  - name: "Bharath Sambasivam"
    role: "(Postdoc in Economou-Barnes group, VT Physics)"
---

<h2>Current members</h2>

<ul>
  {% for member in page.members %}
  <li><strong>{{ member.name | escape }}</strong> — {{ member.role | escape }}</li>
  {% endfor %}
</ul>

<h2>Friends of the group</h2>

<ul>
  {% for friend in page.friends %}
  <li><strong>{{ friend.name | escape }}</strong> {{ friend.role | escape }}</li>
  {% endfor %}
</ul>

<h2>Join the group</h2>

<div class="recruiting-notice" role="note" aria-label="Student recruitment">
  <p>I am actively looking for passionate undergraduate and graduate students who are excited to explore quantum computation! I plan to recruit several Ph.D. students to start in fall 2027, so please reach out if you’re interested.</p>
</div>
