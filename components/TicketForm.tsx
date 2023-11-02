"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";

type Props = {
  ticket?: TicketData;
};

function TicketForm({ ticket }: Props) {
  let initialData: TicketType = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "todo",
    category: "productive",
    active: false,
  };

  const EDITMODE: boolean = ticket ? true : false;

  if (EDITMODE) {
    initialData = { ...ticket } as TicketType;
  }
  const router = useRouter();

  const [formData, setFormData] = useState<TicketType>(initialData);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const value = e.target?.value || "";
    const name = e.target?.name || "";

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeProgress = (value: number) => {
    setFormData((prevData) => ({
      ...prevData,
      ["progress"]: value,
    }));
  };
  const handleChangePriority = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      ["priority"]: Number(value),
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLButtonElement>,
    createAnother: Boolean
  ) => {
    e.preventDefault();

    if (EDITMODE) {
      const response = await fetch(`/api/Tickets/${ticket?._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("failed to update");
      }
    } else {
      const response = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("failed to create");
      }
    }
    if (!createAnother) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className='flex justify-center'>
      <Card className=' w-1/2 p-4 h-auto mt-4'>
        <form className='flex flex-col gap-3 w-fu' method='post'>
          <h3>{EDITMODE ? `Update Ticket` : `Create Ticket`}</h3>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              id='title'
              name='title'
              type='text'
              onChange={handleChange}
              required
              value={formData.title}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              id='description'
              name='description'
              onChange={handleChange}
              required
              value={formData.description}
              rows={5}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              id='category'
              name='category'
              onChange={handleChange}
              required
              value={formData.category}>
              <option value='productive'>productive</option>
              <option value='timepass'>timepass</option>
              <option value='skills'>skills</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Priority</FormLabel>

            <RadioGroup
              id='priority'
              name='priority'
              onChange={handleChangePriority}
              defaultValue={String(formData.priority)}>
              <HStack spacing='24px'>
                <Radio value={"1"}>1</Radio>
                <Radio value={"2"}>2</Radio>
                <Radio value={"3"}>3</Radio>
                <Radio value={"4"}>4</Radio>
                <Radio value={"5"}>5</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Progress</FormLabel>

            <Slider
              id='slider'
              defaultValue={formData.progress}
              min={0}
              max={100}
              colorScheme='teal'
              onChange={handleChangeProgress}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}>
              <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                25%
              </SliderMark>
              <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                50%
              </SliderMark>
              <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                75%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${formData.progress}%`}>
                <SliderThumb />
              </Tooltip>
            </Slider>
          </FormControl>

          <FormControl>
            <FormLabel>Status</FormLabel>

            <Select
              id='status'
              name='status'
              onChange={handleChange}
              required
              value={formData.status}>
              <option value={"todo"}>todo</option>
              <option value={"doing"}>doing</option>
              <option value={"done"}>done</option>
              <option value={"archived"}>archived</option>
            </Select>
          </FormControl>

          <Box className='flex align-middle  justify-end space-x-2'>
            {EDITMODE ? (
              <></>
            ) : (
              <Button
                onClick={(e) => handleSubmit(e, true)}
                className='bg-yellow-500 hover:bg-yellow-600 text-black'>
                Submit & create another
              </Button>
            )}
            <Button
              onClick={(e) => handleSubmit(e, false)}
              className='bg-blue-accent hover:bg-blue-accent-hover text-default-text'>
              Submit
            </Button>
          </Box>
        </form>
      </Card>
    </div>
  );
}

export default TicketForm;
