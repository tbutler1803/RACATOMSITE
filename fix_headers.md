# Header Fix Steps

Replace in each file (About, Contact, Events, Membership):
1. Find: `<Header />`
2. Replace with:
```
<div className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-dark-navy)] border-b border-[var(--color-gold-accent)]/10">
  <Header />
</div>
```

For Events and Membership, also add `pt-20` to the hero className.
