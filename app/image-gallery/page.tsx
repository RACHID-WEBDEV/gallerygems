"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import galleryData from "@/Data/gallery";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { Grid } from "./Grid";
import { SortablePhoto } from "./SortablePhoto";
import { Photo } from "./Photo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Button from "@/components/Button";

const UploadGallery = () => {
  const photos = galleryData.map((items) => items.imageUrl);
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const { data: session } = useSession();
  const router = useRouter();
  if (session === null) {
    router.push("/");
    //   setTimeout(() => toast.success("Logout Succssfully ✅ "), 1000);
    toast.success("Logout Succssfully ✅ ");
  }

  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   const handleSearch = (e: {
  //     target: { value: React.SetStateAction<string> };
  //   }) => {
  //     setSearchTerm(e.target.value);
  //   };

  //   const filteredData = galleryData.filter((item) =>
  //     item.tag.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="xl:container mx-auto">
      <div className="py-10 ">
        <div className="flex items-center gap-4">
          {/* {toggle ? (
            <Button onClick={handleToggle}>Drag and Drop</Button>
          ) : (
            <Button color="secondary" onClick={handleToggle}>
              Search Image
            </Button>
          )} */}
          <Button
            color={toggle ? "defaultColor" : "secondary"}
            onClick={handleToggle}
          >
            Drag and Drop
          </Button>
          <Button
            color={toggle ? "secondary" : "defaultColor"}
            onClick={handleToggle}
          >
            Search Image
          </Button>
        </div>
        {/* <input
          type="text"
          className="py-2 w-96"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by tag..."
        /> */}
        {/* {loading && <p className="text-4xl text-stone-700">Loading...</p>} */}
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={3}>
            {items.map((url, index) => (
              <SortablePhoto key={url} url={url} index={index} />
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default UploadGallery;
