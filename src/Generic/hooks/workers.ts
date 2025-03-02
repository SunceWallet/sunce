import { workers, NetWorker } from "~/src/Workers/worker-controller"

let netWorker: NetWorker | undefined

export function useNetWorker() {
  if (netWorker) {
    return netWorker
  } else {
    // Suspend React component
    throw workers.then(initializedWorkers => {
      netWorker = initializedWorkers.netWorker
    })
  }
}
