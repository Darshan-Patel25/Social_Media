import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = theme.palette; // ✅ Using MUI theme

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Enter a new title for your event:");
    if (!title) return;

    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    const newEvent = {
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    };

    calendarApi.addEvent(newEvent);
    setCurrentEvents((prev) => [...prev, newEvent]);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
      setCurrentEvents((prev) =>
        prev.filter((event) => event.id !== selected.event.id)
      );
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Sidebar for Events */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.background.alt} // ✅ Using theme background
          p="15px"
          borderRadius="8px"
        >
          <Typography variant="h5" color={colors.neutral.main}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.secondary.main,
                  margin: "10px 0",
                  borderRadius: "4px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography color={colors.primary.main}>
                      {new Date(event.start).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Full Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
             
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
