import {TILE_SIZE} from '../MapInfo'

const gridToPixel = (coordsArray) =>  {
  return coordsArray.map(coords=>({
      x: coords.x*TILE_SIZE+TILE_SIZE/2,
      y: coords.y*TILE_SIZE+TILE_SIZE/2
  }))
}

export default {
  text: "\
  ariadne ariadne you \n\
  will face foes you  \n\
  cannot match and    \n\
  trials you simply   \n\
  cannot overcome     \n\
  there is no shame to\n\
  be had in retreat   \n\
  you must only ask   \n\
  yourself when it is \n\
  safe to turn back   \n\
  because this maze   \n\
  winds and this maze \n\
  beguiles and if you \n\
  are not willing to  \n\
  trace your steps    \n\
  then surely you will\n\
  wander these halls  \n\
  until you persih    ",
  maps: [
    {
      weapons: gridToPixel([
        {x: 15, y: 4},
        {x: 17, y: 13},
        {x: 2, y: 17},
      ]),
      enemies: gridToPixel([
        {x: 0, y: 9},
        {x: 1, y: 9}, {x: 1, y: 11}, {x: 1, y: 13},
        {x: 2, y: 9},
        {x: 3, y: 9},
        {x: 4, y: 9},
        {x: 5, y: 9},
        {x: 6, y: 9}, {x: 6, y: 16},
        {x: 7, y: 9},
        {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}, {x: 8, y: 8}, {x: 8, y: 9}, {x: 8, y: 10}, {x: 8, y: 11}, {x: 8, y: 12}, {x: 8, y: 13}, {x: 8, y: 14}, {x: 8, y: 15}, {x: 8, y: 16}, {x: 8, y: 17}, {x: 8, y: 18}, {x: 8, y: 19},
        {x: 11, y: 5}, {x: 11, y: 16},
        {x: 12, y: 6},
        {x: 14, y: 11},
        {x: 17, y: 17},
      ])
    },
    {
      weapons: gridToPixel([
        {x: 17,y: 9},
        {x: 4,y: 14},
        {x: 0,y: 19},
      ]),
      enemies: gridToPixel([
        {x: 0, y: 4}, {x: 0, y: 10}, {x: 0, y: 16},
        {x: 1, y: 4}, {x: 1, y: 7}, {x: 1, y: 10}, {x: 1, y:13}, {x: 1, y: 16}, {x: 1, y: 19},
        {x: 2, y: 4}, {x: 2, y: 7}, {x: 2, y: 10}, {x: 2, y:13}, {x: 2, y: 16}, {x: 2, y: 19},
        {x: 3, y: 2}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 3, y: 5}, {x: 3, y: 6}, {x: 3, y: 7}, {x: 3, y: 8}, {x: 3, y: 9}, {x: 3, y: 10}, {x: 3, y: 11}, {x: 3, y: 12}, {x: 3, y: 13}, {x: 3, y: 14}, {x: 3, y: 15}, {x: 3, y: 16}, {x: 3, y: 17}, {x: 3, y: 18}, {x: 3, y: 19},
        {x: 4, y: 4}, {x: 4, y: 7}, {x: 4, y: 10}, {x: 4, y:13}, {x: 4, y: 16}, {x: 4, y: 19},
        {x: 5, y: 3}, {x: 5, y: 4}, {x: 5, y: 5}, {x: 5, y: 7}, {x: 5, y: 10},{x: 5, y:11}, {x:5, y:12}, {x: 5, y:13}, {x:5, y:14}, {x:5, y:15}, {x: 5, y: 16}, {x: 5, y: 19},
        {x: 6, y: 4}, {x: 6, y: 7}, {x: 6, y: 10}, {x: 6, y:13}, {x: 6, y: 16}, {x: 6, y: 19},
        {x: 7, y: 4}, {x: 7, y: 7}, {x: 7, y: 10}, {x: 7, y:13}, {x: 7, y: 16}, {x: 7, y: 19},
        {x: 8, y: 4}, {x: 8, y: 7}, {x: 8, y: 10}, {x: 8, y:13}, {x: 8, y: 16}, {x: 8, y: 19},
        {x: 9, y: 4}, {x: 9, y: 7}, {x: 9, y: 10}, {x: 9, y:13}, {x: 9, y: 16}, {x: 9, y: 19},
        {x: 10, y: 4}, {x: 10, y: 7}, {x: 10, y: 10}, {x: 10, y:13}, {x: 10, y: 16}, {x: 10, y: 19},
        {x: 11, y: 4}, {x: 11, y: 7}, {x: 11, y: 10}, {x: 11, y:13}, {x: 11, y: 16}, {x: 11, y: 19},
        {x: 12, y: 4}, {x: 12, y: 7}, {x: 12, y: 10}, {x: 12, y:13}, {x: 12, y: 16}, {x: 12, y: 19},
        {x: 13, y: 4}, {x: 13, y: 7}, {x: 13, y: 10}, {x: 13, y:13}, {x: 13, y: 16}, {x: 13, y: 19},
        {x: 14, y: 4}, {x: 14, y: 7}, {x: 14, y: 10}, {x: 14, y:13}, {x: 14, y:14}, {x:14, y:15}, {x: 14, y: 16}, {x:14, y:17}, {x:14, y:18}, {x: 14, y: 19},
        {x: 15, y: 4}, {x: 15, y: 7}, {x: 15, y: 10}, {x: 15, y:13}, {x: 15, y: 16}, {x: 15, y: 19},
        {x: 16, y: 4}, {x: 16, y: 7}, {x: 16, y: 10}, {x: 16, y:13}, {x: 16, y: 16}, {x: 16, y: 19},
        {x: 17, y: 4}, {x: 17, y: 6}, {x: 17, y: 7}, {x: 17, y: 8}, {x: 17, y: 10}, {x: 17, y:13}, {x: 17, y: 16}, {x: 17, y: 19},
        {x: 18, y: 4}, {x: 18, y: 7}, {x: 18, y: 10}, {x: 18, y:13}, {x: 18, y: 16}, {x: 18, y: 19},
        {x: 19, y: 7}, {x: 19, y:13}, {x: 19, y: 19},
      ])
    },
    {
      weapons: gridToPixel([
        {x: 3, y: 8},
        {x: 19, y: 11},
        {x: 0, y: 19},
      ]),
      enemies: gridToPixel([
        {x: 0, y: 10}, {x: 0, y: 11}, {x: 0, y: 12},
        {x: 1, y: 10}, {x: 1, y: 11}, {x: 1, y: 12},
        {x: 2, y: 10}, {x: 2, y: 11}, {x: 2, y: 12},
        {x: 3, y: 10}, {x: 3, y: 11}, {x: 3, y: 12},
        {x: 4, y: 10}, {x: 4, y: 11}, {x: 4, y: 12},
        {x: 5, y: 10}, {x: 5, y: 11}, {x: 5, y: 12},
        {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 6, y: 6}, {x: 6, y: 7}, {x: 6, y: 8}, {x: 6, y: 9}, {x: 6, y: 10}, {x: 6, y: 11}, {x: 6, y: 12}, {x: 6, y: 13}, {x: 6, y: 14}, {x: 6, y: 15}, {x: 6, y: 16}, {x: 6, y: 17}, {x: 6, y: 18}, {x: 6, y: 19},
        {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}, {x: 7, y: 7}, {x: 7, y: 8}, {x: 7, y: 9}, {x: 7, y: 10}, {x: 7, y: 11}, {x: 7, y: 12}, {x: 7, y: 13}, {x: 7, y: 14}, {x: 7, y: 15}, {x: 7, y: 16}, {x: 7, y: 17}, {x: 7, y: 18}, {x: 7, y: 19},
        {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}, {x: 8, y: 8}, {x: 8, y: 9}, {x: 8, y: 10}, {x: 8, y: 11}, {x: 8, y: 12}, {x: 8, y: 13}, {x: 8, y: 14}, {x: 8, y: 15}, {x: 8, y: 16}, {x: 8, y: 17}, {x: 8, y: 18}, {x: 8, y: 19},
        {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}, {x: 9, y: 9}, {x: 9, y: 10}, {x: 9, y: 11}, {x: 9, y: 12}, {x: 9, y: 13}, {x: 9, y: 14}, {x: 9, y: 15}, {x: 9, y: 16}, {x: 9, y: 17}, {x: 9, y: 18}, {x: 9, y: 19},
        {x: 10, y: 10}, {x: 10, y: 11}, {x: 10, y: 12},
        {x: 11, y: 10}, {x: 11, y: 11}, {x: 11, y: 12},
        {x: 12, y: 10}, {x: 12, y: 11}, {x: 12, y: 12},
        {x: 13, y: 10}, {x: 13, y: 11}, {x: 13, y: 12},
        {x: 14, y: 10}, {x: 14, y: 11}, {x: 14, y: 12},
        {x: 15, y: 10}, {x: 15, y: 11}, {x: 15, y: 12},
        {x: 16, y: 10}, {x: 16, y: 11}, {x: 16, y: 12},
        {x: 17, y: 10}, {x: 17, y: 11}, {x: 17, y: 12},
        {x: 18, y: 10}, {x: 18, y: 11}, {x: 18, y: 12},
      ])
    },
    {
      weapons: gridToPixel([
        {x: 19, y: 8},
        {x: 9, y: 14},
        {x: 9, y: 10},
      ]),
      enemies: gridToPixel([
        {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8}, {x: 0, y: 9},
        {x: 1, y: 6}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 9}, {x: 1, y: 11},
        {x: 2, y: 6}, {x: 2, y: 7}, {x: 2, y: 8}, {x: 2, y: 9}, {x: 2, y: 11},
        {x: 3, y: 6}, {x: 3, y: 7}, {x: 3, y: 8}, {x: 3, y: 9}, {x: 3, y: 11},
        {x: 4, y: 6}, {x: 4, y: 7}, {x: 4, y: 8}, {x: 4, y: 9}, {x: 4, y: 11},
        {x: 5, y: 6}, {x: 5, y: 7}, {x: 5, y: 8}, {x: 5, y: 9}, {x: 5, y: 11},
        {x: 6, y: 6}, {x: 6, y: 7}, {x: 6, y: 8}, {x: 6, y: 9}, {x: 6, y: 11}, {x: 6, y: 16},
        {x: 7, y: 6}, {x: 7, y: 7}, {x: 7, y: 8}, {x: 7, y: 9}, {x: 7, y: 11}, {x: 7, y: 16},
        {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}, {x: 8, y: 8}, {x: 8, y: 9}, {x: 8, y: 10}, {x: 8, y: 11}, {x: 8, y: 12}, {x: 8, y: 13}, {x: 8, y: 14}, {x: 8, y: 15}, {x: 8, y: 16}, {x: 8, y: 17}, {x: 8, y: 18}, {x: 8, y: 19},
        {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}, {x: 9, y: 9}, {x: 9, y: 11}, {x: 9, y: 16},
        {x: 10, y: 2}, {x: 10, y: 3}, {x: 10, y: 4}, {x: 10, y: 5}, {x: 10, y: 6}, {x: 10, y: 7}, {x: 10, y: 8}, {x: 10, y: 9}, {x: 10, y: 10}, {x: 10, y: 11}, {x: 10, y: 12}, {x: 10, y: 13}, {x: 10, y: 14}, {x: 10, y: 15}, {x: 10, y: 16}, {x: 10, y: 17}, {x: 10, y: 18}, {x: 10, y: 19},
        {x: 11, y: 6}, {x: 11, y: 7}, {x: 11, y: 8}, {x: 11, y: 9}, {x: 11, y: 11}, {x: 11, y: 16},
        {x: 12, y: 6}, {x: 12, y: 7}, {x: 12, y: 8}, {x: 12, y: 9}, {x: 12, y: 11}, {x: 12, y: 16},
        {x: 13, y: 6}, {x: 13, y: 7}, {x: 13, y: 8}, {x: 13, y: 9}, {x: 13, y: 11},
        {x: 14, y: 6}, {x: 14, y: 7}, {x: 14, y: 8}, {x: 14, y: 9}, {x: 14, y: 10}, {x: 14, y: 11},
        {x: 15, y: 6}, {x: 15, y: 7}, {x: 15, y: 8}, {x: 15, y: 9}, {x: 15, y: 11},
        {x: 16, y: 6}, {x: 16, y: 7}, {x: 16, y: 8}, {x: 16, y: 9}, {x: 16, y: 11},
        {x: 17, y: 6}, {x: 17, y: 7}, {x: 17, y: 8}, {x: 17, y: 9}, {x: 17, y: 10}, {x: 17, y: 11},
        {x: 18, y: 6}, {x: 18, y: 7}, {x: 18, y: 8}, {x: 18, y: 9}, {x: 18, y: 11},
      ])
    },
  ]
}
