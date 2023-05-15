# Metrics

There are many important metrics when measuring the clarity of a code base.

### Commits per file
```bash
git log --name-only --pretty="format:" | sed '/^\s*$/'d | sort | uniq -c | sort -r
```

### Ruby Flog

```bash
find app -name \*.rb | xargs flog
```

### Ruby Flay
```bash
flay app/**/*.rb
```
