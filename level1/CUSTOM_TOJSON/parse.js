// In the `Appointment` Model
parse: function(response){
  var appointment = response.appointment;
  appointment.cancelled = appointment.cankelled;
  delete appointment.cankelled;
  return appointment;
}