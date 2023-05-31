from django.db import models

class Note(models.Model):
    noteId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=500)
    date_created = models.DateField(auto_now_add=True)
