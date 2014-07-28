var appointment = new Appointment({title: "Toothache"});
var appView = new AppointmentView({model: appointment});
appointment.set({title: "General Cleaning"}, {highlight: false});