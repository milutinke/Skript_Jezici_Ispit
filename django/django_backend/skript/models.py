from django.db import models

class User(models.Model):
    class Meta:
        db_table = "users"

    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    createdAt = models.DateField()
    updatedAt = models.DateField()
    


class Ticket(models.Model):
    class Meta:
        db_table = "ticket"

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=64)
    body = models.CharField(max_length=1024)
    createdAt = models.DateField()
    updatedAt = models.DateField()
    UserId = models.IntegerField()



class TicketAnswer(models.Model):
    class Meta:
        db_table = "ticket_answer"

    id = models.AutoField(primary_key=True)
    body = models.CharField(max_length=1024)
    TicketId = models.IntegerField()
    UserId = models.IntegerField()