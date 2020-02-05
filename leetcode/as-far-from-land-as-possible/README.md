# README

## Algorithm

To find a water cell with maximized nearest distance to any land, we need to know the nearest distance to any land for every water cell. Start from every land, do BFS to find out nearest distance to this land. In the maintime, we update the nearest distance to any land for every water cell. After traversing all lands, we know the nearest distance to any land for every water cell, we traverse all water cells to find out the maximized one.
