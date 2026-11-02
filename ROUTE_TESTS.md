# Route Tests

I tested the main routes after adding React Router.

- `/` worked and showed the home page.
- `/expeditions` worked and showed the expedition list.
- Clicking an expedition opened the correct detail page.
- `/expeditions/1` showed Ancient Ruins Expedition.
- `/expeditions/4` showed Frozen Peaks Survey.
- The Back button returned me to the expedition list correctly.
- Refreshing while on `/expeditions/1` still loaded the correct expedition.
- `/expeditions/999` showed the Expedition Not Found message instead of breaking the page.
