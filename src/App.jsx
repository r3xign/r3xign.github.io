```jsx
<div className="wave wave3" />


{/* Birds */}
<div className="bird bird1"></div>
<div className="bird bird2"></div>
<div className="bird bird3"></div>


<motion.h1
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-6xl font-bold drop-shadow-xl"
>
RexHub
</motion.h1>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 1 }}
className="mt-2 text-xl opacity-80"
>
Ultimate Script Hub — Secure Key System
</motion.p>


<motion.button
onClick={handleGetKey}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="mt-10 px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-xl"
>
{loading ? "Generating..." : "Get Key"}
</motion.button>


{key && (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="mt-6 bg-black/30 backdrop-blur-xl px-6 py-4 rounded-xl border border-white/20 shadow-lg text-lg"
>
Your Key: <span className="font-mono">{key}</span>
</motion.div>
)}
</div>
);
}
```


---
