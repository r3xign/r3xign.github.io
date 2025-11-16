```javascript
export async function generateKey() {
try {
const res = await fetch(
"https://script.google.com/macros/s/AKfycbwbNJN0KCDny2rVu46kucQO3qI8r7VIuvdJNZvJDtvOodtg_W_DRZQEgUyZWYoX9AYN/exec?generate"
);
const data = await res.json();
return data.key;
} catch (err) {
return "ERROR";
}
}
```


---
