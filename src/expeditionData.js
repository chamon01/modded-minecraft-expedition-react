export const expeditionData = [
  {
    id: 1,
    name: "Ancient Ruins Expedition",
    biome: "Overgrown Forest",
    status: "Completed"
  },
  {
    id: 2,
    name: "Deep Cavern Supply Run",
    biome: "Dripstone Caves",
    status: "Preparing"
  },
  {
    id: 3,
    name: "Nether Fortress Search",
    biome: "Nether Wastes",
    status: "Planned"
  },
  {
    id: 4,
    name: "Frozen Peaks Survey",
    biome: "Jagged Peaks",
    status: "Planned"
  }
]

export function countCompleted(expeditions) {
  return expeditions.filter((item) => item.status === "Completed").length
}
