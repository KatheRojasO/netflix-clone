import React, { useState } from "react";
import AdminModal from "./AdminModal";
import MultiVideoEntryForm from "./forms/MultiVideoEntryForm";
import SingleVideoEntryForm from "./forms/SingleVideoEntryForm";

export default function AdminCategoryView({
  categoryName,
  categoryEntries,
  categoryDispatch,
  updateFunction,
  deleteFunction,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalEntry, setModalEntry] = useState({});

  function deleteEntry(entry) {
    categoryDispatch({ type: "delete", payload: entry.id });
    deleteFunction(entry.id);
  }

  function updateEntry(entry) {
    categoryDispatch({ type: "update", payload: entry });
    updateFunction(entry);
  }

  function handleEdit(entry) {
    setIsOpen(true);
    setModalEntry(entry);
  }

  const entries = categoryEntries.map((entry, index) => (
    <div className="sections-container" key={index}>
      <p className="file-name">{entry.name}</p>
      <div className="sections-btns">
        <button className="edit-btn" onClick={() => handleEdit(entry)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteEntry(entry)}>
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="admin-category-view">
      <h3>{categoryName}</h3>
      {entries}
      {modalEntry && (
        <AdminModal open={isOpen} onClose={() => setIsOpen(false)}>
          {categoryName === "Series" ? (
            <MultiVideoEntryForm
              currentEntry={modalEntry}
              handleEntryEvent={updateEntry}
            />
          ) : (
            <SingleVideoEntryForm
              currentEntry={modalEntry}
              handleEntryEvent={updateEntry}
            />
          )}
        </AdminModal>
      )}
    </div>
  );
}
