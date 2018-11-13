from django.db import models

# Create your models here.
class Announcement(models.Model):
    title = models.CharField(max_length=40)
    content = models.TextField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
