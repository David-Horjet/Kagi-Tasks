# Kagi Developer Assessment

This repository contains my solutions to the **Kagi Developer Assessment**.

---

## Task 1: Recipe Widgets (HTML/CSS)

**File:** `task1.html`
A responsive recipe widget implementation with two variations:

* **Checkbox List Widget** – Interactive ingredients list with a *Show more/less* toggle.
* **Text Widget** – Step-by-step instructions with expandable content.

Features:

* Pure HTML/CSS (no JavaScript).
* Mobile-friendly layout with flexbox and media queries.
* Smooth transitions for expandable content.

---

## Task 2: Court Hearing Time Calculator (JavaScript)

**File:** `task2.js`
Calculates how long it will take until your hearing ends in a court scheduling scenario.

### Function

```javascript
function court(you, judges, others) {
  const names = others.split(" ");
  names.push(you);
  names.sort();
  const pos = names.indexOf(you) + 1;
  const round = Math.ceil(pos / judges);
  return round * 30;
}
```

### Examples

```javascript
court("Jules", 3, "Adam Betty Frank Mike"); // 60
court("Zane", 1, "Mark Hank Ana Vivian");  // 150
```

### Benchmark

A simple benchmark is included to test performance with 1e6 iterations.

---
