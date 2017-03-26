function addCheckDate(key) {
  df = new java.text.SimpleDateFormat('yyyy-MM-dd');
  v = new java.util.ArrayList();
  v.add(df.format(new java.util.Date()));
  tags.put('check_date:'+key,v);
}

for (var key in Iterator(new  java.util.HashSet(tags.keySet()))) {
  if (!key.contains('check_date')) {
    newValues = tags.get(key);
    if (newValues != null && newValues.size() > 0) {
      oldValues = originalTags.get(key);
      if (newValues.size() !== oldValues.size()) {
        addCheckDate(key);
      } else {
        for (i=0;i<newValues.size();i++) {
          if (newValues.get(i) !== oldValues.get(i)) {
            addCheckDate(key);
            break;
          }
        }
      }
    }
  }
}
tags.remove('automatic_check_date');
