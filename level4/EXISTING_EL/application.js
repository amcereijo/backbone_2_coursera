var appointmentsView = new AppointmentsView({collection: appointments, el:$('#app')});
$('#app').html(appointmentsView.render());