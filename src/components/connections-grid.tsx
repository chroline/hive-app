import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";

import { Card } from "~/components/card.tsx";
import Connection from "~/util/types/connection.ts";

export interface ConnectionsGrid {
  connections: Record<string, Connection>;
}

export function ConnectionsGrid({ connections }: ConnectionsGrid) {
  const [connectionsState, updateConnectionsState] = useState<Record<string, boolean>>({});

  function onToggleConnect(id: string) {
    if (connectionsState[id]) {
      updateConnectionsState(connectionsState => ({ ...connectionsState, [id]: false }));
      toast(`Disconnected from ${connections[id].title}`, {
        description: "Successfully removed connection.",
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    } else {
      updateConnectionsState(connectionsState => ({ ...connectionsState, [id]: true }));
      toast(`Connected to ${connections[id].title}`, {
        description: "Successfully added connection.",
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    }
  }

  return (
    <div className={"grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
      <AnimatePresence>
        {Object.entries(connections).map(([id, { title, description }], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <Card
              title={title}
              description={description}
              id={id}
              isConnected={connectionsState[id]}
              onToggleConnect={() => onToggleConnect(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
