import React from "react";
import { useState } from "react";

export const NotionKanban = () => {
    return 
        <div className="h-screen w-full bg-neutral-900 text-neutral-50">
            <Board/>
        </div>
};

const Board = () => {
    const [cards, setCards] = useState(DEFAULT_CARDS)

    return
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column
                title="Backlog"
                column="backlog"
                headingColour="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="To Do"
                column="todo"
                headingColour="text-yellow-200"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="In Progress"
                column="doing"
                headingColour="text-blue-300"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Complete"
                column="done"
                headingColour="text-emerald-200"
                cards={cards}
                setCards={setCards}
            />
        </div>
}

const Column = ({ title, headingColour, column, cards, setCards }) => {
    const [active, setActive] = useState(false);
    
    const filteredCards = cards.filter((c) => c.column === column);
    
    return
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColour}`}>
                    {title}
                </h3>
                <span className="rounded text-sm text-neutral-400">
                    {cards.length}
                </span>
            </div>
            <div className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}></div>
        </div>
}

const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];