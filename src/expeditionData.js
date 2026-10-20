export const expeditionData = [
  {
    name: "Ancient Ruins Expedition",
    biome: "Overgrown Forest",
    status: "Completed"
  },
  {
    name: "Deep Cavern Supply Run",
    biome: "Dripstone Caves",
    status: "Preparing"
  },
  {
    name: "Nether Fortress Search",
    biome: "Nether Wastes",
    status: "Planned"
  }
]

export function countCompleted(expeditions) {
  return expeditions.filter(item => item.status === "Completed").length
}
