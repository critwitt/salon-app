class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments, status: :ok
    end

    def show
        appointment = Appointment.find(params[:id])
        render json: appointment, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        params.permit(:date, :time, :description, :user_id, :hair_stylist_id)
    end

end
