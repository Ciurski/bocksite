from django.db import models

# extends user model
class Competitor(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    email = models.EmailField()
    license = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        return "Imię: {}, Nazwisko: {}, Nr. lic.: {}".format(self.name, self.surname, self.license)
