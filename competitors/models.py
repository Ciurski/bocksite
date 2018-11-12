from django.db import models

# Create your models here.
class Competitor(models.Model):
    email = models.EmailField()
    license = models.CharField(max_length=10)
    name = models.CharField(max_length=10)
    surname = models.CharField(max_length=10)

    def __str__(self):
        """A string representation of the model."""
        return "Imię: {}, Nazwisko: {}, Nr. lic.: {}".format(self.name, self.surname, self.license)
