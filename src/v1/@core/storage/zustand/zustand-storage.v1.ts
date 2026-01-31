import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { v4 as uuidv4 } from "uuid";

interface KanbanStore {
	// mode: TOperationMode;
  // columns: TKanbanServerStore["columns"];
  // clientId?: string;
  // hydrate: (data: TKanbanServerStore) => void;
  // applyEvent: (event: TMainEvent) => void;
}

// const sortByOrder = <T extends { order: number }>(list: T[]) =>
//   [...list].sort((a, b) => a.order - b.order);

export const useKanbanStore = create<KanbanStore>()(
  persist(
    (set, get) => ({
      // mode: "NORMAL",
			// applyEvent(event) {git push 
			// 	switch (event.type) {
			// 		case "CHANGE_OPERATION_MODE": {
			// 			set({ mode: event.mode });
			// 			break;
			// 		}
			// 	}
			// },
    }),
    {
      name: "kanban-storage",
    },
  ),
);
