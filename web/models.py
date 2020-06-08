from django.db import models

class Batch(models.Model):
    description = models.CharField(max_length=500)
    forest = models.ForeignKey(
        'Forest',
        on_delete=models.PROTECT
    )
    beekeepers = models.ManyToManyField('Beekeeper')

    class Meta:
        verbose_name_plural = 'batches'


class Beekeeper(models.Model):
    full_name = models.CharField(max_length=50)


class Forest(models.Model):
    name = models.CharField(max_length=200)
