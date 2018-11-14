from django.db import models
from competitors.models import Competitor
# Create your models here.
class Contest(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    description = models.TextField(max_length=255)

    competitors = models.ManyToManyField(
    Competitor,
    through = 'Results',
    through_fields = ('contest', 'competitor')
    )

class Results(models.Model):
    # relations to Contest events and competitors
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    competitor = models.ForeignKey(Competitor, on_delete=models.CASCADE)
    # if results was modified by jury
    jury_confirmed = models.BooleanField(default=False)
    # contest results:
    pcz = models.IntegerField(default=0)
    kczbo = models.IntegerField(default=0)
    kczo = models.IntegerField(default=0)
    pd = models.IntegerField(default=0)
    kd = models.IntegerField(default=0)
    pp = models.IntegerField(default=0)
    kp = models.IntegerField(default=0)
    kcp = models.IntegerField(default=0)
    pcp = models.IntegerField(default=0)
    char = models.IntegerField(default=0)
