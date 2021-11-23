import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import { selectDateRange } from './CalendarSlice';
import { useAppDispatch } from '../../app/hooks';

export function Calendar() {
    const dispatch = useAppDispatch();

    return <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="fr"
        initialView="dayGridMonth"
        firstDay={1}
        selectable={true}
        buttonText={{
            day: 'jour',
            today: "Aujourd'hui",
            week: 'semaine',
            month: 'mois'
        }}
        events={[{
            allDay: true,
            backgroundColor: 'purple',
            date: '2021-11-23',
            id: 'Moumou',
            title: 'Moumou',
            editable: true
        }]}
        select={({startStr, endStr}) => {dispatch(selectDateRange([startStr, endStr]))}}
    />;
}