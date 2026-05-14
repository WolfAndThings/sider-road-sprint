// Sider Road Foundation Sprint — checklist persistence + progress counter
// Each page calls initChecklist(pageKey) on DOMContentLoaded.

(function () {
  function storageKey(page) {
    return 'sider-road-sprint-' + page;
  }

  function loadState(page) {
    try {
      return JSON.parse(localStorage.getItem(storageKey(page))) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState(page, state) {
    localStorage.setItem(storageKey(page), JSON.stringify(state));
  }

  function updateProgress(page, items) {
    var counter = document.getElementById('check-progress-' + page);
    if (!counter) return;
    var total = items.length;
    var done = items.filter(function (li) {
      return li.classList.contains('done');
    }).length;
    counter.textContent = done + ' of ' + total + ' complete';
  }

  window.initChecklist = function (page) {
    var list = document.getElementById('checklist-' + page);
    if (!list) return;

    var state = loadState(page);
    var items = Array.prototype.slice.call(list.querySelectorAll('li[data-id]'));

    items.forEach(function (li) {
      var id = li.dataset.id;
      var cb = li.querySelector('input[type="checkbox"]');
      var titleEl = li.querySelector('.check-title');
      if (cb && titleEl && !cb.getAttribute('aria-label')) {
        cb.setAttribute('aria-label', titleEl.textContent.trim());
      }
      if (state[id]) {
        cb.checked = true;
        li.classList.add('done');
      }
      var toggle = function () {
        cb.checked = !cb.checked;
        if (cb.checked) {
          li.classList.add('done');
          state[id] = true;
        } else {
          li.classList.remove('done');
          delete state[id];
        }
        saveState(page, state);
        updateProgress(page, items);
      };
      li.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') return;
        if (e.target === cb) {
          // checkbox was clicked directly, sync class + state
          if (cb.checked) {
            li.classList.add('done');
            state[id] = true;
          } else {
            li.classList.remove('done');
            delete state[id];
          }
          saveState(page, state);
          updateProgress(page, items);
          return;
        }
        toggle();
      });
    });

    var clearBtn = document.getElementById('check-clear-' + page);
    if (clearBtn) {
      if (!clearBtn.getAttribute('type')) clearBtn.setAttribute('type', 'button');
      clearBtn.addEventListener('click', function () {
        if (!confirm('Clear all checks on this page?')) return;
        items.forEach(function (li) {
          li.classList.remove('done');
          var cb = li.querySelector('input[type="checkbox"]');
          cb.checked = false;
        });
        localStorage.removeItem(storageKey(page));
        updateProgress(page, items);
      });
    }

    updateProgress(page, items);
  };
})();
