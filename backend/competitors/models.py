from django.db import models
from django.contrib.auth.models import User
# extends user model
class Competitor(models.Model):
    user = models.OneToOneField(User, null=True,default=None, on_delete=models.SET_NULL)
    email = models.EmailField()
    license = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        return "Imię: {}, Nazwisko: {}, Nr. lic.: {}".format(self.name, self.surname, self.license)
